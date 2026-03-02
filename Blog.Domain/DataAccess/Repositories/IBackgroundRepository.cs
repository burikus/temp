using Blog.Domain.DataAccess.Entities;

namespace Blog.Domain.DataAccess.Repositories
{
    public interface IBackgroundRepository
    {
        Task<Background[]> GetByIdsAsync(Guid[] uids);
        Task CreateRangeAsync(Background[] bgnd);
        Task UpdateRangeAsync(Background[] bgnds);
        Task DeleteRangeAsync(Background[] bgnds);
    }
}
