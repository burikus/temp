using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class RasterMap : IEntityTypeConfiguration<Raster>
    {
        public void Configure(EntityTypeBuilder<Raster> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Code)
                .HasConversion(new EnumToStringConverter<RasterCode>())
                .HasMaxLength(16)
                .IsRequired();
            builder.Property(x => x.ImageFile);
            builder.Property(x => x.Description)
               .IsRequired();

            builder
                .HasMany(r => r.Stamps)
                .WithOne(r => r.Raster)
                .HasForeignKey(x => x.RasterId);
        }
    }
}
