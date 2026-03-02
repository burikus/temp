using Blog.Domain.DataAccess.Entities;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Blog.Core.DataAccess.EntityFramework.Configurations
{
    public class BackgroundMap : IEntityTypeConfiguration<Background>
    {
        public void Configure(EntityTypeBuilder<Background> builder)
        {
            builder.HasKey(bgnd => bgnd.Id);

            builder.Property(bgnd => bgnd.Image)
                .IsRequired();

            builder.Property(bgnd => bgnd.IsActive)
                .IsRequired();

            builder.Property(bgnd => bgnd.Number)
                .IsRequired();

            builder.Property(bgnd => bgnd.Name)
                .IsRequired();

            builder.Property(bgnd => bgnd.ImageMaxSize)
                .IsRequired();
        }
    }
}
