using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class StampTypeMap : IEntityTypeConfiguration<StampType>
    {
        public void Configure(EntityTypeBuilder<StampType> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.StampCode)
                .HasConversion(new EnumToStringConverter<StampCode>())
                .HasMaxLength(32)
                .IsRequired();
            builder.Property(x => x.Description)
                .IsRequired();
            builder.Property(x => x.Horizontal)
                .IsRequired();
            builder.Property(x => x.Vertical)
                .IsRequired();

            builder
                .HasMany(r => r.Pictures)
                .WithOne(r => r.StampType)
                .HasForeignKey(x => x.StampTypeId);
        }
    }
}
