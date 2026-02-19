using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IPerforationRepository
    {
        Task CreateRangeAsync(Perforation[] papers);
        Task UpdateRangeAsync(Perforation[] papers);
        Task DeleteRangeAsync(Perforation[] papers);
        Task<Perforation[]> GetByIdsAsync(Guid[]? ids);
        Task<Perforation[]> GetByCodesAsync(PerforationCode[]? codes);
    }
}
