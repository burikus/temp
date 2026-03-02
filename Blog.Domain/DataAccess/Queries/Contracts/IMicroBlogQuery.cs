using Blog.Domain.DataAccess.Projections;

namespace Blog.Domain.DataAccess.Queries.Contracts
{
    public interface IMicroBlogQuery
    {
        Task<MicroBlogProjection[]> MicroBlogsByFilterAsync(MicroBlogFilter filter);
    }
}
