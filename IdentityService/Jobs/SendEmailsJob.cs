using IdentityService.Domain.Interfaces;

using Infrastructure.Locking;

using Quartz;

namespace IdentityService.Jobs
{
    [DisallowConcurrentExecution]
    public class SendEmailsJob : IJob
    {
        private const int LockAcquireTimeoutSeconds = 120;

        private readonly ILogger<SendEmailsJob> _logger;
        private readonly IFeedbackMessageService _mailService;
        private readonly LockService _locks;

        public SendEmailsJob(
            ILogger<SendEmailsJob> logger,
            IFeedbackMessageService mailService,
            LockService lockService
        )
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _mailService = mailService ?? throw new ArgumentNullException(nameof(mailService));
            _locks = lockService ?? throw new ArgumentNullException(nameof(lockService));
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var jobName = GetType().Name;

            try
            {
                _logger.LogInformation("Starting {JobName} job...", jobName);
                await _locks.AcquireLock(context.JobDetail.Key.Name, LockAcquireTimeoutSeconds)
                    .ExecuteAsync(() => _mailService.SendFeedbackMessagesAsync(), CancellationToken.None);
                _logger.LogInformation("Completed {JobName} job", jobName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception during processing {JobName} job", jobName);
            }
        }
    }
}
