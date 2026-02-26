using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Entities.Relations;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IdentityService.DataAccess.EntityFramework.Configurations
{
    public class RoleMap : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.ToTable("Role");

            builder.Property(u => u.Name)
                .HasMaxLength(70)
                .IsRequired();
            builder.Property(u => u.NormalizedName)
                .HasMaxLength(70)
                .IsRequired();
            builder.Property(u => u.ConcurrencyStamp)
                .HasDefaultValue(Guid.NewGuid().ToString())
                .IsRequired();

            builder
                .HasMany(r => r.Users)
                .WithMany(r => r.Roles)
                .UsingEntity<UserRole>();
        }
    }
}
