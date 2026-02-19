using Domain.Enums;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class PaperMap : IEntityTypeConfiguration<Paper>
    {
        public void Configure(EntityTypeBuilder<Paper> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Code)
                .HasConversion(new EnumToStringConverter<PaperCode>())
                .HasMaxLength(32)
                .IsRequired();
            builder.Property(x => x.ImageFile);
            builder.Property(x => x.Description)
               .IsRequired();

            builder
                .HasMany(r => r.Stamps)
                .WithOne(r => r.Paper)
                .HasForeignKey(x => x.PaperId);
        }
    }
}
