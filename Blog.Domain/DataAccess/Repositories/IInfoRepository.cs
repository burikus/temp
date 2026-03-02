using Blog.Domain.DataAccess.Entities;

namespace Blog.Domain.DataAccess.Repositories
{
    public interface IInfoRepository
    {
        Task<Info[]> GetByIdsAsync(Guid[] ids);
        Task AddInfosAsync(IEnumerable<Info>? infos = null);
        Task UpdateInfosAsync(Info[]? infos = null);
        Task RemoveInfosAsync(IEnumerable<Info>? infos = null);
    }
}
