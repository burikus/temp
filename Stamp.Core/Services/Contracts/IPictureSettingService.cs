using Domain.Core;

using Stamp.Core.Models.PictureSettings;

namespace Stamp.Core.Services.Contracts
{
    public interface IPictureSettingService
    {
        Task<Result<PictureSettingResponseModel>> AllPictureSettingsAsync();
        Task<Result<string>> UpdatePictureSettingsAsync(UpdatePictureSettingModel model);
    }
}
