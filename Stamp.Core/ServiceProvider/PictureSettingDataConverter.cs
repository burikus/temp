using Domain.Core;

using Stamp.Core.Models.PictureSettings;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    //public class PictureSettingsGetConverter : IConverter<PictureSettingsResponseModel, PictureSettingProjection[]>
    //{
    //    private readonly IConverter<PictureSettingResponseModel, PictureSettingProjection> _catalogConverter;

    //    public PictureSettingsGetConverter()
    //    {
    //        _catalogConverter = new PictureSettingGetConverter();
    //    }

    //    public PictureSettingsResponseModel From(PictureSettingProjection[] src)
    //    {
    //        return new PictureSettingsResponseModel(_catalogConverter.From(src), src.Count()); ;
    //    }

    public class PictureSettingGetConverter : IConverter<PictureSettingResponseModel, PictureSettingProjection>
    {
        public PictureSettingResponseModel From(PictureSettingProjection src)
        {
            return new PictureSettingResponseModel
            {
                Id = src.Id,
                WatermarkFontName = src.WatermarkFontName,
                WatermarkFontSize = src.WatermarkFontSize,
                WatermarkFontColor = src.WatermarkFontColor,
                WatermarkFontStyleWeight = src.WatermarkFontStyleWeight,
                WatermarkText = src.WatermarkText,
                WatermarkTextRotation = src.WatermarkTextRotation,
                EncoderQuality = src.EncoderQuality,
                ImageMaxSize = src.ImageMaxSize,
                WatermarkXPosition = src.WatermarkXPosition,
                WatermarkYPosition = src.WatermarkYPosition,
                ImageRotation = src.ImageRotation,
                Resize = src.Resize,
                AddWatermark = src.AddWatermark,
                SampleImage = Convert.ToBase64String(src.SampleImage),
                SampleImageType = src.SampleImageType,
                ImageHeight = src.ImageHeight,
                ImageWidth = src.ImageWidth
            };
        }
    }
    //}
}
