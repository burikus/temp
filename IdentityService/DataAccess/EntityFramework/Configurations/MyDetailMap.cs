using IdentityService.Domain.DataAccess.Entities;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EzServ.IdentityService.DataAccess.EntityFramework.Configurations
{
    public class MyDetailMap : IEntityTypeConfiguration<MyDetail>
    {
        public void Configure(EntityTypeBuilder<MyDetail> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Text)
                .IsRequired();

            builder.Property(x => x.Font)
                .IsRequired();

            builder.Property(x => x.FontSize)
                .IsRequired();

            builder.Property(x => x.FontColor)
                .IsRequired();

            builder.Property(x => x.FontStyleWeight)
                .IsRequired();

            builder.Property(x => x.Align)
                .IsRequired();

            builder.Property(x => x.IsAboutme)
                .HasDefaultValue(false)
                .IsRequired();

            builder.Property(x => x.IsNewsletter)
                .HasDefaultValue (false)
                .IsRequired();
        }
    }
}
