using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IThemeRepository
    {
        Task CreateRangeAsync(Theme[] themes);
        Task UpdateRangeAsync(Theme[] themes);
        Task DeleteRangeAsync(Theme[] themes);
        Task<Theme[]> GetByIdsAsync(Guid[]? ids);
        Task<Theme[]> GetByCodesAsync(ThemeCode[]? codes);
        Task<Theme[]> GetBySubThemeIdsAsync(Guid[]? ids);
    }
}
