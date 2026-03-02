using Blog.Core.Models.MicroBlogs;

using Domain.Core;

namespace Blog.Core.Services.Contracts
{
    public interface IMicroBlogService
    {
        Task<Result<MicroBlogsResponseModel>> MicroBlogByFilterAsync(bool isAdmin, MicroBlogsGetModel args);
        Task<Result<string>> UpdateMicroBlogsAsync(MicroBlogsUpdateModel model);
        Task<Result<string>> AddMicroBlogsAsync(MicroBlogsCreateModel model);
        Task<Result<string>> DeleteMicroBlogsAsync(MicroBlogsDeleteModel model);
    }
}
