using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Projections;
using Blog.Domain.DataAccess.Queries.Contracts;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class SwipperQuery : ISwipperQuery
    {
        private readonly IQueryable<Swipper> _swippers;

        public SwipperQuery(BlogContext blogContext)
        {
            if (blogContext == null)
            {
                throw new ArgumentNullException(nameof(blogContext));
            }

            _swippers = blogContext.Swipper.AsNoTracking();
        }

        public Task<SwipperProjection[]> AllSwippersAsync(bool isAdmin)
        {
            return isAdmin
                ? _swippers.Where(x => x.IsActive)
                        .Select(x =>
                            new SwipperProjection(x.Id, x.Image, x.IsActive, x.MenuId))
                        .ToArrayAsync()
                : _swippers
                        .Select(x =>
                            new SwipperProjection(x.Id, x.Image, x.IsActive, x.MenuId))
                        .ToArrayAsync();
        }
    }
}
