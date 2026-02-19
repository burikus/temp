using Domain.Core;

using Stamp.Core.Models.Backgrounds;

namespace Stamp.Core.Services.Contracts
{
    public interface IBackgroundService
    {
        Task<Result<BackgroundsResponseModel>> AllBackgroundsAsync();
        Task<Result<string>> AddBackgroundsAsync(CreateBackgroundsModel model);
        Task<Result<string>> UpdateBackgroundsAsync(UpdateBackgroundsModel model);
        Task<Result<string>> DeleteBackgroundsAsync(DeleteBackgroundsModel model);
    }
}
