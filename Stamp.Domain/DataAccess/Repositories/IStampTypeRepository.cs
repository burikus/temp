using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IStampTypeRepository
    {
        Task CreateRangeAsync(StampType[] stampTypes);
        Task UpdateRangeAsync(StampType[] stampTypes);
        Task DeleteRangeAsync(StampType[] stampTypes);
        Task<StampType[]> GetByIdsAsync(Guid[]? IssueFormIds);
        Task<StampType[]> GetByCodesAsync(StampCode[]? codes);
    }
}
