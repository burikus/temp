using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class StampCatalogMap : IEntityTypeConfiguration<StampCatalog>
    {
        public void Configure(EntityTypeBuilder<StampCatalog> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.CatalogNumber)
                .IsRequired();

            builder
                .HasOne(r => r.Catalog)
                .WithMany(r => r.CatalogStamps)
                .HasForeignKey(x => x.CatalogId);
        }
    }
}
