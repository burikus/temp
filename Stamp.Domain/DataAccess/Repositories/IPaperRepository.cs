using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IPaperRepository
    {
        Task CreateRangeAsync(Paper[] papers);
        Task UpdateRangeAsync(Paper[] papers);
        Task DeleteRangeAsync(Paper[] papers);
        Task<Paper[]> GetByIdsAsync(Guid[]? ids);
        Task<Paper[]> GetByCodesAsync(PaperCode[]? codes);
    }
}
