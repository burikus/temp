using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface ISubThemeRepository
    {
        Task CreateRangeAsync(SubTheme[] subThemes);
        Task UpdateRangeAsync(SubTheme[] subThemes);
        Task DeleteRangeAsync(SubTheme[] subThemes);
        Task<SubTheme[]> GetByIdsAsync(Guid[]? ids);
        Task<SubTheme[]> GetByCodesAsync(SubThemeCode[]? codes);
    }
}
