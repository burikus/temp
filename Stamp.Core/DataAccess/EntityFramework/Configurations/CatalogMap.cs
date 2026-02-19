using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class CatalogMap : IEntityTypeConfiguration<Catalog>
    {
        public void Configure(EntityTypeBuilder<Catalog> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Code)
                .HasConversion(new EnumToStringConverter<CatalogCode>())
                .HasMaxLength(16)
                .IsRequired();
            builder.Property(x => x.Description)
               .IsRequired();

            builder
                .HasMany(r => r.CatalogStamps)
                .WithOne(r => r.Catalog)
                .HasForeignKey(x => x.CatalogId);
        }
    }
}
