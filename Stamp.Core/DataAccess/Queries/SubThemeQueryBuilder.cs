using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class SubThemeQueryBuilder
    {
        private IQueryable<SubTheme> _queryable;

        public static SubThemeQueryBuilder From(StampContext _context)
        {
            var queryable = _context.SubTheme.AsQueryable().AsNoTracking();

            return new SubThemeQueryBuilder(queryable);
        }

        private SubThemeQueryBuilder(IQueryable<SubTheme> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<SubTheme> Build()
        {
            return _queryable;
        }

        public SubThemeQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public SubThemeQueryBuilder ByCodes(SubThemeCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }
    }
}
