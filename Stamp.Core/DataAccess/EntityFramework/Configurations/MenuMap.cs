using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
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

            builder.HasMany(x => x.SubMenues)
                .WithOne(x => x.Menu)
                .HasForeignKey(x => x.MenuId);

            builder.HasQueryFilter(x => x.IsActive);
        }
    }
}
