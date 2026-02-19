using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class PictureSettingQuery : IPictureSettingQuery
    {
        private readonly IQueryable<PictureSetting> _pictureSettings;
        private readonly StampContext _stampsContext;

        public PictureSettingQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _pictureSettings = stampsContext.PictureSetting.AsNoTracking();
        }

        public Task<PictureSettingProjection?> AllPictureSettingsAsync()
        {
            return _pictureSettings.Select(x => new PictureSettingProjection
            {
                Id = x.Id,
                WatermarkText = x.WatermarkText,
                WatermarkTextRotation = x.WatermarkTextRotation,
                WatermarkFontName = x.WatermarkFontName,
                WatermarkFontSize = x.WatermarkFontSize,
                WatermarkFontStyleWeight = x.WatermarkFontStyleWeight,
                WatermarkFontColor = x.WatermarkFontColor,
                EncoderQuality = x.EncoderQuality,
                ImageMaxSize = x.ImageMaxSize,
                WatermarkXPosition = x.WatermarkXPosition,
                WatermarkYPosition = x.WatermarkYPosition,
                ImageRotation = x.ImageRotation,
                Resize = x.Resize,
                AddWatermark = x.AddWatermark,
                SampleImage = x.SampleImage,
                SampleImageType = x.SampleImageType,
                ImageHeight = x.ImageHeight,
                ImageWidth = x.ImageWidth
            })
            .FirstOrDefaultAsync();
        }
    }
}
