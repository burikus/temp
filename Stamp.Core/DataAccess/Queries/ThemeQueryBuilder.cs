using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class ThemeQueryBuilder
    {
        private IQueryable<Theme> _queryable;

        public static ThemeQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Theme.AsQueryable().AsNoTracking();

            return new ThemeQueryBuilder(queryable);
        }

        private ThemeQueryBuilder(IQueryable<Theme> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Theme> Build()
        {
            return _queryable;
        }

        public ThemeQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Include(x => x.SubTheme).Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public ThemeQueryBuilder ByCodes(ThemeCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Include(x => x.SubTheme).Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }

        public ThemeQueryBuilder BySubThemeId(Guid?[]? subThemeIds)
        {
            if (subThemeIds.HasAny())
                _queryable = _queryable.Include(x => x.SubTheme).Where(x => x.SubThemeId.HasValue && subThemeIds!.Distinct().Contains(x.SubThemeId.Value));

            return this;
        }
    }
}
