using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Projections;
using Blog.Domain.DataAccess.Queries;
using Blog.Domain.DataAccess.Queries.Contracts;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class MicroBlogQuery : IMicroBlogQuery
    {
        private readonly IQueryable<MicroBlog> _microBlogs;
        private readonly BlogContext _blogContext;

        public MicroBlogQuery(BlogContext blogContext)
        {
            if (blogContext == null)
            {
                throw new ArgumentNullException(nameof(blogContext));
            }
            _blogContext = blogContext;
            _microBlogs = blogContext.MicroBlog.AsNoTracking();
        }

        public Task<MicroBlogProjection[]> MicroBlogsByFilterAsync(MicroBlogFilter filter)
        {
            return MicroBlogFilterQueryBuilder
                .From(_blogContext)
                .ByIds(filter.Ids)
                .IsAdmin(filter.IsAdmin)
                .Build()
                .Include(x => x.Infos).ThenInclude(x => x.TextFormatting)
                .Select(x =>
                    new MicroBlogProjection
                    (
                        x.Id,
                        x.MenuId,
                        x.MenuPosition,
                        x.IsActive,
                        x.Infos.Select(y =>
                            new InfoProjection(y.Id, y.Text, y.IsActive, y.TextFormattingId))
                            .ToArray()
                    ))
                    .ToArrayAsync();
        }
    }
}
