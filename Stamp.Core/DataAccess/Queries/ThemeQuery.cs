using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class ThemeQuery : IThemeQuery
    {
        private readonly IQueryable<Theme> _themes;
        private readonly StampContext _stampsContext;

        public ThemeQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _themes = stampsContext.Theme.AsNoTracking();
        }

        public Task<ThemeProjection[]> AllThemesAsync()
        {
            return _themes
                .Include(x => x.SubTheme)
                .Select(x => new ThemeProjection(x.Id, x.Code, x.Description, x.SubTheme != null ? new SubThemeProjection(x.SubTheme.Id, x.SubTheme.Code, x.SubTheme.Description) : null)).ToArrayAsync();
        }

        public Task<ThemeProjection[]> ThemesFilteredAsync(ThemeFilter filter)
        {
            return ThemeQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .BySubThemeId(filter.SubThemeIds)
                .Build()
                .Include(x => x.SubTheme)
                .Select(x =>
                    new ThemeProjection
                    (
                        x.Id,
                        x.Code,
                        x.Description,
                        x.SubTheme != null ? new SubThemeProjection(x.SubTheme.Id, x.SubTheme.Code, x.SubTheme.Description) : null
                    ))
                .ToArrayAsync();
        }
    }
}