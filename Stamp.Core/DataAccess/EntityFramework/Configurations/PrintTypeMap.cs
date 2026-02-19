using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class PrintTypeMap : IEntityTypeConfiguration<PrintType>
    {
        public void Configure(EntityTypeBuilder<PrintType> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Code)
                .HasConversion(new EnumToStringConverter<PrintTypeCode>())
                .HasMaxLength(32)
                .IsRequired();
            builder.Property(x => x.ImageFile);
            builder.Property(x => x.Description)
               .IsRequired();

            builder
                .HasMany(r => r.Stamps)
                .WithOne(r => r.PrintType)
                .HasForeignKey(x => x.PrintTypeId);
        }
    }
}
