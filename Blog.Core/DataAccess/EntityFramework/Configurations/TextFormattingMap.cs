using Blog.Domain.DataAccess.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.EntityFramework.Configurations
{
    public class TextFormattingMap : IEntityTypeConfiguration<TextFormatting>
    {
        public void Configure(EntityTypeBuilder<TextFormatting> builder)
        {
            builder.HasKey(f => f.Id);

            builder.Property(f => f.Font)
                .IsRequired();

            builder.Property(f => f.Size)
                .IsRequired();

            builder.Property(f => f.Color)
                .IsRequired();

            builder.Property(f => f.Align);

            builder.Property(f => f.Style);

            builder.Property(f => f.Weight);

            builder.Property(f => f.StrokeUnderline);

            builder.Property(f => f.TextType)
                .HasConversion(new EnumToStringConverter<TextType>())
                .HasMaxLength(16)
                .IsRequired();

            builder
                .HasMany(r => r.Infos)
                .WithOne(r => r.TextFormatting)
                .HasForeignKey(x => x.TextFormattingId);

            builder
                .HasMany(r => r.Menues)
                .WithOne(r => r.TextFormatting)
                .HasForeignKey(x => x.TextFormattingId);
        }
    }
}
