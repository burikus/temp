using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class SubThemeMap : IEntityTypeConfiguration<SubTheme>
    {
        public void Configure(EntityTypeBuilder<SubTheme> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Code)
                .HasConversion(new EnumToStringConverter<SubThemeCode>())
                .HasMaxLength(32)
                .IsRequired();
            builder.Property(x => x.Description)
                .IsRequired();

            builder
                .HasMany(r => r.Themes)
                .WithOne(x => x.SubTheme)
                .HasForeignKey(x => x.SubThemeId);
        }
    }
}
