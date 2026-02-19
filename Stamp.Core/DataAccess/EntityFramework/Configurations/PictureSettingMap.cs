using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class PictureSettingMap : IEntityTypeConfiguration<PictureSetting>
    {
        public void Configure(EntityTypeBuilder<PictureSetting> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.ImageMaxSize)
                .IsRequired();

            builder.Property(x => x.WatermarkText)
                .IsRequired();

            builder.Property(x => x.WatermarkTextRotation)
                .IsRequired();

            builder.Property(x => x.WatermarkFontColor)
                .IsRequired();

            builder.Property(x => x.WatermarkFontName)
                .IsRequired();

            builder.Property(x => x.WatermarkFontSize)
                .IsRequired();

            builder.Property(x => x.WatermarkFontStyleWeight)
                .IsRequired();

            builder.Property(x => x.WatermarkXPosition)
                .IsRequired();

            builder.Property(x => x.WatermarkYPosition)
                .IsRequired();

            builder.Property(x => x.ImageRotation)
                .IsRequired();

            builder.Property(x => x.EncoderQuality)
                .IsRequired();

            builder.Property(x => x.Resize)
                .IsRequired();

            builder.Property(x => x.AddWatermark)
                .IsRequired();

            builder.Property(x => x.SampleImage);

            builder.Property(x => x.SampleImageType)
                .IsRequired();

            builder.Property(x => x.ImageHeight);

            builder.Property(x => x.ImageWidth);
        }
    }
}
