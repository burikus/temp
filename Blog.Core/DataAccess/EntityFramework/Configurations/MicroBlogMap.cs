using Blog.Domain.DataAccess.Entities;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Blog.Core.DataAccess.EntityFramework.Configurations
{
    public class MicroBlogMap : IEntityTypeConfiguration<MicroBlog>
    {
        public void Configure(EntityTypeBuilder<MicroBlog> builder)
        {
            builder.HasKey(k => k.Id);

            builder.Property(x => x.MenuPosition);

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.Property(x => x.MenuId);

            builder
                .HasMany(r => r.Infos)
                .WithOne(r => r.Blog)
                .HasForeignKey(x => x.BlogId)
                .OnDelete(DeleteBehavior.Cascade); 

            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}
