using Blog.Domain.DataAccess.Entities;

namespace Blog.Domain.DataAccess.Repositories
{
    public interface IMicroBlogRepository
    {
        Task<MicroBlog[]> GetByIdsAsync(Guid[] ids);
        Task AddMicroBlogsAsync(MicroBlog[]? microBlogs = null);
        Task UpdateMicroBlogsAsync(IEnumerable<MicroBlog>? microBlogs = null);
        Task RemoveMicroBlogsAsync(MicroBlog[]? microBlogs = null);
    }
}
