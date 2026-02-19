using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface ISubThemeQuery
    {
        Task<SubThemeProjection[]> AllSubThemesAsync();
        Task<SubThemeProjection[]> SubThemesFilteredAsync(SubThemeFilter filter);
    }
}
