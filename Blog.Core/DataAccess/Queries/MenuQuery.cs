using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Projections;
using Blog.Domain.DataAccess.Queries.Contracts;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class MenuQuery : IMenuQuery
    {
        private readonly IQueryable<Menu> _menues;

        public MenuQuery(BlogContext blogContext)
        {
            if (blogContext == null)
            {
                throw new ArgumentNullException(nameof(blogContext));
            }

            _menues = blogContext.Menu.AsNoTracking();
        }

        public async Task<MenuProjection[]> AllMenuesAsync(bool isAdmin)
        {
            var query = _menues;

            if (isAdmin)
            {
                query = query.IgnoreQueryFilters();
            }

            return await query
                .Select(x =>
                new MenuProjection
                (
                    x.Id,
                    x.Name,
                    x.IsActive,
                    x.Position,
                    x.TextFormattingId
                ))
                .OrderBy(pos => pos.Position)
                .ToArrayAsync();
        }
    }
}
