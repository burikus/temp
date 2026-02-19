using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class PictureMap : IEntityTypeConfiguration<Picture>
    {
        public void Configure(EntityTypeBuilder<Picture> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Name)
                .IsRequired();
            builder.Property(x => x.Type)
                .IsRequired();
            builder.Property(x => x.Size)
               .IsRequired();
            builder.Property(x => x.ImageFile)
               .IsRequired();
            builder.Property(x => x.ImageWidth);
            builder.Property(x => x.ImageHeight);

            builder
                .HasOne(r => r.StampInfo)
                .WithOne(r => r.Picture)
                .HasForeignKey<StampInfo>(x => x.PictureId).OnDelete(DeleteBehavior.Cascade);

            builder
                .HasOne(r => r.StampType)
                .WithMany(r => r.Pictures)
                .HasForeignKey(x => x.StampTypeId);
            builder
                .HasOne(r => r.Country)
                .WithMany(r => r.Pictures)
                .HasForeignKey(x => x.CountryId);

            builder
                .HasMany(p => p.StampCatalogs)
                .WithMany(p => p.Pictures)
                .UsingEntity<Dictionary<string, object>>(
                    "PictureCatalog",
                    j => j.HasOne<StampCatalog>().WithMany().HasForeignKey("CatalogId"),
                    j => j.HasOne<Picture>().WithMany().HasForeignKey("PictureId").OnDelete(DeleteBehavior.Cascade),
                    j =>
                    {
                        j.HasKey("PictureId", "CatalogId");
                        j.ToTable("PictureCatalogs");
                    });
        }
    }
}
