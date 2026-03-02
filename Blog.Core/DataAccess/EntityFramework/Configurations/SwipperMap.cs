using Blog.Domain.DataAccess.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.EntityFramework.Configurations
{
    public class SwipperMap : IEntityTypeConfiguration<Swipper>
    {
        public void Configure(EntityTypeBuilder<Swipper> builder)
        {
            builder.HasKey(k => k.Id);

            builder.Property(x => x.Image)
                .IsRequired();

            builder.Property(x => x.IsActive)                
               .IsRequired();

            builder.Property(x => x.MenuId);

            //builder
            //   .HasOne(r => r.Menu)
            //   .WithOne(r => r.Swipper)
            //   .HasForeignKey<Menu>(x => x.SwipperId);

            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}
