using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

using Polly;

using Serilog;

using ILogger = Serilog.ILogger;

namespace Infrastructure.Locking
{
    public class LockService
    {
        private readonly ILogger _logger = Log.ForContext(typeof(LockService));

        private readonly ILockRepository _locks;

        private string _resourceName;
        private int _lockPeriodSeconds;
        private int _times;
        private TimeSpan _delay = TimeSpan.FromTicks(0);
        private double _multiplier = 1;
        private readonly List<Predicate<Exception>> _retryMatchers = new();

        public LockService(ILockRepository lockRepository)
        {
            _locks = lockRepository ?? throw new ArgumentNullException(nameof(lockRepository));
        }

        public ExecuteUnderLockBuilder AcquireLock(string resourceName, int lockPeriodSeconds)
        {
            _resourceName = resourceName;
            _lockPeriodSeconds = lockPeriodSeconds;
            return new ExecuteUnderLockBuilder(this);
        }

        public class ExecuteUnderLockBuilder
        {
            private readonly LockService _parent;

            public ExecuteUnderLockBuilder(LockService lockService)
            {
                _parent = lockService ?? throw new ArgumentNullException(nameof(lockService));
            }

            public AcquireLockRetryBuilder Retry(int times)
            {
                _parent._times = times;
                return new AcquireLockRetryBuilder(_parent);
            }

            public ExecuteUnderLockBuilder When<TException>()
            {
                _parent._retryMatchers.Add(ex => ex is TException);
                return this;
            }

            public ExecuteUnderLockBuilder When<TException>(Predicate<TException> predicate)
                where TException : Exception
            {
                _parent._retryMatchers.Add(ex => ex is TException tex && predicate(tex));
                return this;
            }

            public async Task ExecuteAsync(Func<Task> action, CancellationToken cancellationToken = default)
            {
                await _parent.ExecuteAsync(action, cancellationToken);
            }
        }

        public class AcquireLockRetryBuilder
        {
            private readonly LockService _parent;

            public AcquireLockRetryBuilder(LockService lockService)
            {
                _parent = lockService ?? throw new ArgumentNullException(nameof(lockService));
            }

            public ExecuteUnderLockBuilder WithExponentialBackOff(TimeSpan delay, double multiplier)
            {
                _parent._delay = delay;
                _parent._multiplier = multiplier;
                return new ExecuteUnderLockBuilder(_parent);
            }

            public ExecuteUnderLockBuilder WithFixedBackOff(TimeSpan delay)
            {
                _parent._delay = delay;
                _parent._multiplier = 1;
                return new ExecuteUnderLockBuilder(_parent);
            }
        }

        private async Task ExecuteAsync(Func<Task> action, CancellationToken cancellationToken = default)
        {
            async Task<Guid> GetLock()
            {
                var lockResult = await _locks.LockResourceAsync(_resourceName, _lockPeriodSeconds, cancellationToken);
                return lockResult ?? throw new Exception($"Resource {_resourceName} lock acquisition failed.");
            }

            void LogRetryAttempt(Exception exception, TimeSpan timeSpan, int attempt, Context context) =>
                _logger.Information(exception, "Failed to acquire lock on attempt {AttemptNumber}. Retrying after delay", attempt);

            var lockToken = await Policy
                .Handle<Exception>(ShouldRetry)
                .WaitAndRetryAsync(_times, attempt => _delay * Math.Pow(_multiplier, attempt - 1), LogRetryAttempt)
                .ExecuteAsync(GetLock);

            try
            {
                await action();
            }
            finally
            {
                await _locks.ReleaseResourceLockAsync(lockToken, cancellationToken);
            }
        }

        private bool ShouldRetry(Exception ex)
        {
            return _retryMatchers.Count == 0 // no exception filters
                || _retryMatchers.Any(predicate => predicate(ex)); // any exception filters vote yes
        }
    }
}
