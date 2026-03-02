using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Projections;
using Blog.Domain.DataAccess.Queries.Contracts;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class BackgroundQuery : IBackgroundQuery
    {
        private readonly IQueryable<Background> _background;

        public BackgroundQuery(BlogContext blogContext)
        {
            if (blogContext == null)
            {
                throw new ArgumentNullException(nameof(blogContext));
            }

            _background = blogContext.Background.AsNoTracking();
        }

        public Task<BackgroundProjection[]> AllBackgroundsAsync(bool isAdmin)
        {
            return isAdmin
                ? _background.Where(x => x.IsActive)
                        .Select(x =>
                            new BackgroundProjection(x.Id, x.Image, x.IsActive, x.Number, x.Name, x.ImageMaxSize))
                        .ToArrayAsync()
                : _background
                        .Select(x =>
                            new BackgroundProjection(x.Id, x.Image, x.IsActive, x.Number, x.Name, x.ImageMaxSize))
                        .ToArrayAsync();
        }
    }
}
