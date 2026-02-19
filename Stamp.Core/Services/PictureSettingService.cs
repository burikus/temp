using Domain.Core;
using Domain.Utils;

using Stamp.Core.Models.PictureSettings;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class PictureSettingService : IPictureSettingService
    {
        private readonly IPictureSettingQuery _pictureSettingQuery;
        private readonly IPictureSettingRepository _pictureSettingRepository;

        public PictureSettingService(IPictureSettingQuery pictureSettingQuery, IPictureSettingRepository pictureSettingRepository)
        {
            _pictureSettingQuery = SystemObjects.RequireNotNull(pictureSettingQuery, nameof(pictureSettingQuery));
            _pictureSettingRepository = SystemObjects.RequireNotNull(pictureSettingRepository, nameof(pictureSettingRepository));
        }

        public async Task<Result<PictureSettingResponseModel?>> AllPictureSettingsAsync()
        {
            var result = await _pictureSettingQuery.AllPictureSettingsAsync();

            return Result<PictureSettingResponseModel?>.Ok(result != null ? new PictureSettingGetConverter().From(result) : null);
        }

        public async Task<Result<string>> UpdatePictureSettingsAsync(UpdatePictureSettingModel model)
        {
            var pictureSetting = (await _pictureSettingRepository.GetByIdsAsync([model.Id])).FirstOrDefault();
            if (pictureSetting == null)
                return Result<string>.BadRequest("Настройки фото для обновления не найдены.");

            pictureSetting.WatermarkFontName = model?.WatermarkFontName ?? pictureSetting.WatermarkFontName;
            pictureSetting.WatermarkFontSize = model?.WatermarkFontSize ?? pictureSetting.WatermarkFontSize;
            pictureSetting.WatermarkFontStyleWeight = model?.WatermarkFontStyleWeight ?? pictureSetting.WatermarkFontStyleWeight;
            pictureSetting.WatermarkFontColor = model?.WatermarkFontColor ?? pictureSetting.WatermarkFontColor;
            pictureSetting.WatermarkText = model?.WatermarkText ?? pictureSetting.WatermarkText;
            pictureSetting.WatermarkTextRotation = model?.WatermarkTextRotation ?? pictureSetting.WatermarkTextRotation;
            pictureSetting.EncoderQuality = model?.EncoderQuality ?? pictureSetting.EncoderQuality;
            pictureSetting.ImageMaxSize = model?.ImageMaxSize ?? pictureSetting.ImageMaxSize;
            pictureSetting.WatermarkXPosition = model?.WatermarkXPosition ?? pictureSetting.WatermarkXPosition;
            pictureSetting.WatermarkYPosition = model?.WatermarkYPosition ?? pictureSetting.WatermarkYPosition;
            pictureSetting.ImageRotation = model?.ImageRotation ?? pictureSetting.ImageRotation;
            pictureSetting.Resize = model?.Resize ?? pictureSetting.Resize;
            pictureSetting.AddWatermark = model?.AddWatermark ?? pictureSetting.AddWatermark;
            pictureSetting.SampleImage = !string.IsNullOrEmpty(model?.SampleImage) ? Convert.FromBase64String(model.SampleImage) : pictureSetting.SampleImage;
            pictureSetting.SampleImageType = model?.SampleImageType ?? pictureSetting.SampleImageType;
            pictureSetting.ImageWidth = model?.ImageWidth ?? pictureSetting.ImageWidth;
            pictureSetting.ImageHeight = model?.ImageHeight ?? pictureSetting.ImageHeight;

            await _pictureSettingRepository.UpdateRangeAsync([pictureSetting]);

            return Result<string>.Ok("Настройки фото обновлены.");
        }


    }
}
