using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class StampInfoMap : IEntityTypeConfiguration<StampInfo>
    {
        public void Configure(EntityTypeBuilder<StampInfo> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.IssueDate);
            builder.Property(x => x.Color);
            builder.Property(x => x.Background);
            builder.Property(x => x.IsUV)
               .IsRequired();
            builder.Property(x => x.IsForm2)
               .IsRequired();
            builder.Property(x => x.Size);
            builder.Property(x => x.PrintedCopies)
                .IsRequired();
            builder.Property(x => x.Designer);
            builder.Property(x => x.LinkToCatalogEmitter);
            builder.Property(x => x.IsKindOf)
               .IsRequired();
            builder.Property(x => x.IsDefect)
               .IsRequired();
            builder.Property(x => x.IsAdditional)
               .IsRequired();

            builder.Property(work => work.Position);
            builder.Property(work => work.SubMenuId);
            builder.Property(work => work.SubMenuPosition);

            builder
                .HasOne(r => r.Picture)
                .WithOne(r => r.StampInfo)
                .HasForeignKey<Picture>(x => x.StampInfoId);

            builder
                .HasOne(r => r.Watermark)
                .WithMany(r => r.Stamps)
                .HasForeignKey(x => x.WatermarkId);
            builder
                .HasOne(r => r.Raster)
                .WithMany(r => r.Stamps)
                .HasForeignKey(x => x.RasterId);
            builder
                .HasOne(r => r.Perforation)
                .WithMany(r => r.Stamps)
                .HasForeignKey(x => x.PerforationId);
            builder
                .HasOne(r => r.PrintType)
                .WithMany(r => r.Stamps)
                .HasForeignKey(x => x.PrintTypeId);
            builder
                .HasOne(r => r.Paper)
                .WithMany(r => r.Stamps)
                .HasForeignKey(x => x.PaperId);
            builder
                .HasOne(r => r.StampSeries)
                .WithMany(r => r.Stamps)
                .HasForeignKey(x => x.StampSeriesId);
        }
    }
}
