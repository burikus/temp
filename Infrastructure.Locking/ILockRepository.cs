using System;
using System.Threading;
using System.Threading.Tasks;

namespace Infrastructure.Locking
{
    public interface ILockRepository
    {
        Task<Guid?> LockResourceAsync(string resourceId, int lockSpanSeconds, CancellationToken cancellationToken = default);
        Task<Guid?> ReleaseResourceLockAsync(Guid resourceLockTokenId, CancellationToken cancellationToken = default);
    }
}
