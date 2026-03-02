using Blog.Core.Models.Backgrounds;

using Domain.Core;

namespace Blog.Core.Services.Contracts
{
    public interface IBackgroundService
    {
        Task<Result<BackgroundsResponseModel>> AllBackgroundsAsync(bool isAdmin);
        Task<Result<string>> AddBackgroundsAsync(BackgroundsCreateModel model);
        Task<Result<string>> UpdateBackgroundsAsync(BackgroundsUpdateModel model);
        Task<Result<string>> DeleteBackgroundsAsync(BackgroundsDeleteModel model);
    }
}
