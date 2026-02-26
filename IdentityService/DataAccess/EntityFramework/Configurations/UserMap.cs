using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Entities.Relations;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IdentityService.DataAccess.EntityFramework.Configurations
{
    public class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(u => u.UserName)
                .HasMaxLength(120)
                .IsRequired();
            builder.Property(u => u.FamilyName)
                .HasMaxLength(120);
            builder.Property(u => u.Email)
                .HasMaxLength(256)
                .IsRequired();
            builder.Property(u => u.NormalizedEmail)
                .HasMaxLength(256)
                .IsRequired();
            builder.Property(u => u.PasswordHash)
                .IsRequired();
            builder.Property(u => u.CreatedDate)
                .IsRequired();
            builder.Property(u => u.FullName)
                .IsRequired();
            builder.Property(u => u.Active)
                .HasDefaultValue(false)
                .IsRequired();
            builder.Property(u => u.Subscription)
                .HasDefaultValue(false)
                .IsRequired();
            builder.Property(u => u.Avatar);
            builder.Property(u => u.LastSuccessfulLogin);

            builder.Property(e => e.CreationEmailConfirmationLinkDate)
                .IsRequired(false);

            builder.Property(e => e.EmailConfirmationExpired)
                .HasDefaultValue(false);

            builder.Property(e => e.EmailConfirmed)
                .HasDefaultValue(false);

            builder
                .HasMany(r => r.Roles)
                .WithMany(r => r.Users)
                .UsingEntity<UserRole>();
        }
    }
}
