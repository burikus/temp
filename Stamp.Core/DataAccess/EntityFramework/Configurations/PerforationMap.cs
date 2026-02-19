using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class PerforationMap : IEntityTypeConfiguration<Perforation>
    {
        public void Configure(EntityTypeBuilder<Perforation> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Code)
                .HasConversion(new EnumToStringConverter<PerforationCode>())
                .HasMaxLength(16)
                .IsRequired();
            builder.Property(x => x.ImageFile);
            builder.Property(x => x.Description)
               .IsRequired();

            builder
                .HasMany(r => r.Stamps)
                .WithOne(r => r.Perforation)
                .HasForeignKey(x => x.PerforationId);
        }
    }
}
