using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;

using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class MicroBlogFilterQueryBuilder
    {
        private IQueryable<MicroBlog> _queryable;

        public static MicroBlogFilterQueryBuilder From(BlogContext _context)
        {
            var queryable = _context.MicroBlog.AsQueryable().AsNoTracking();

            return new MicroBlogFilterQueryBuilder(queryable);
        }

        private MicroBlogFilterQueryBuilder(IQueryable<MicroBlog> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<MicroBlog> Build()
        {
            return _queryable;
        }

        public MicroBlogFilterQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public MicroBlogFilterQueryBuilder IsAdmin(bool isAdmin)
        {
            if (isAdmin)
                _queryable = _queryable.IgnoreQueryFilters();

            return this;
        }
    }
}
