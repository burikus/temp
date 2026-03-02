using Blog.Domain.DataAccess.Entities;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Blog.Core.DataAccess.EntityFramework.Configurations
{
    public class MenuMap : IEntityTypeConfiguration<Menu>
    {
        public void Configure(EntityTypeBuilder<Menu> builder)
        {
            builder.HasKey(k => k.Id);

            builder.Property(x => x.Name)
                .IsRequired();

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.Property(x => x.Position)
                .IsRequired();

            builder
               .HasOne(r => r.Swipper)
               .WithOne(r => r.Menu)
               .HasForeignKey<Swipper>(x => x.MenuId);

            builder
               .HasMany(r => r.Blogs)
               .WithOne(r => r.Menu);

            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}
