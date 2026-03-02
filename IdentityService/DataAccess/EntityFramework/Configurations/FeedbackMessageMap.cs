using IdentityService.Domain.Constants;
using IdentityService.Domain.DataAccess.Entities;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IdentityService.DataAccess.EntityFramework.Configurations
{
    public class FeedbackMessageMap : IEntityTypeConfiguration<FeedbackMessage>
    {
        public void Configure(EntityTypeBuilder<FeedbackMessage> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd()
                .IsRequired();

            builder.Property(x => x.UserId)
                .IsRequired();

            builder.Property(x => x.AskedDateTime)
                .IsRequired();

            builder.Property(x => x.SentDateTime);

            builder.Property(x => x.Message)
                .HasMaxLength(FeedbackMessageConstraints.MessageMaxLength)
                .IsRequired();

        }
    }
}
