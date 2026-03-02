using Blog.Domain.DataAccess.Entities;

namespace Blog.Domain.DataAccess.Repositories
{
    public interface ISwipperRepository
    {
        Task<Swipper[]> GetByIdsAsync(Guid[] uids);
        Task CreateRangeAsync(IEnumerable<Swipper> swippers);
        Task UpdateRangeAsync(Swipper[] swippers);
        Task DeleteRangeAsync(Swipper[] swippers);
    }
}
