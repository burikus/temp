using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class CountryMap : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Code)
                .HasConversion(new EnumToStringConverter<CountryCode>())
                .HasMaxLength(32)
                .IsRequired();
            builder.Property(x => x.Description)
               .IsRequired();

            builder
                .HasMany(r => r.Pictures)
                .WithOne(r => r.Country)
                .HasForeignKey(x => x.CountryId);
        }
    }
}
