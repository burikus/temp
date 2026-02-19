using Stamp.Core.Models.Pictures;
using Stamp.Core.Models.PictureSettings;

namespace Stamp.Core.Services.Contracts
{
    public interface IProcessImageService
    {
        Task<CreatePictureModel> ResizeAndAddWatermark(CreatePictureModel item);
        Task<UpdatePictureSettingModel> ResizeAndAddWatermarkSample(UpdatePictureSettingModel model);
        string ResizeBackground(string image, string contentType, decimal imageMaxSize);
    }
}
