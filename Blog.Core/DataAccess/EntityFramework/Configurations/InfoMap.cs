using Blog.Domain.DataAccess.Entities;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Blog.Core.DataAccess.EntityFramework.Configurations
{
    public class InfoMap : IEntityTypeConfiguration<Info>
    {
        public void Configure(EntityTypeBuilder<Info> builder)
        {
            builder.HasKey(k => k.Id);

            builder.Property(x => x.Text)
                .IsRequired();

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.Property(x => x.BlogId);
            builder.Property(x => x.TextFormattingId)
                .IsRequired();

            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}
