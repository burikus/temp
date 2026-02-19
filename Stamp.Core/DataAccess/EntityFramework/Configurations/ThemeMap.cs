using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class ThemeMap : IEntityTypeConfiguration<Theme>
    {
        public void Configure(EntityTypeBuilder<Theme> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Code)
                .HasConversion(new EnumToStringConverter<ThemeCode>())
                .HasMaxLength(32)
                .IsRequired();
            builder.Property(x => x.Description)
                .IsRequired();
            builder.Property(x => x.SubThemeId);

            builder
                .HasMany(r => r.Stamps)
                .WithOne(x => x.Theme)
                .HasForeignKey(x => x.ThemeId);
        }
    }
}
