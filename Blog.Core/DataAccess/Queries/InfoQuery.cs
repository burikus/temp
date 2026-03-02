using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Projections;
using Blog.Domain.DataAccess.Queries;
using Blog.Domain.DataAccess.Queries.Contracts;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class InfoQuery : IInfoQuery
    {
        private readonly IQueryable<Info> _infos;
        private readonly BlogContext _blogContext;

        public InfoQuery(BlogContext blogContext)
        {
            if (blogContext == null)
            {
                throw new ArgumentNullException(nameof(blogContext));
            }
            _blogContext = blogContext;
            _infos = blogContext.Info.AsNoTracking();
        }

        public Task<InfoProjection[]> InfoByFilterAsync(InfoFilter filter)
        {
            return InfoQueryBuilder
                .From(_blogContext)
                .ByIds(filter.Ids)
                .IsAdmin(filter.IsAdmin)
                .Build()
                .Include(x => x.TextFormatting)
                .Select(x =>
                new InfoProjection
                (
                    x.Id,
                    x.Text,
                    x.IsActive,
                    x.TextFormattingId
                ))
                .ToArrayAsync();
        }
    }
}
