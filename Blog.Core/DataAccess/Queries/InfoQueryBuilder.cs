using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;

using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class InfoQueryBuilder
    {
        private IQueryable<Info> _queryable;

        public static InfoQueryBuilder From(BlogContext _context)
        {
            var queryable = _context.Info.AsQueryable().AsNoTracking();

            return new InfoQueryBuilder(queryable);
        }

        private InfoQueryBuilder(IQueryable<Info> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Info> Build()
        {
            return _queryable;
        }

        public InfoQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public InfoQueryBuilder IsAdmin(bool isAdmin)
        {
            if (isAdmin)
                _queryable = _queryable.IgnoreQueryFilters();

            return this;
        }
    }
}
