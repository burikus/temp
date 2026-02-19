using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IBackgroundRepository
    {
        Task<Background[]> GetByIdsAsync(Guid[] uids);
        Task CreateRangeAsync(Background[] bgnd);
        Task UpdateRangeAsync(Background[] bgnds);
        Task DeleteRangeAsync(Background[] bgnds);
    }
}
