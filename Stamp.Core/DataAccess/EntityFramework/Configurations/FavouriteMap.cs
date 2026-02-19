using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class FavouriteMap : IEntityTypeConfiguration<Favourite>
    {
        public void Configure(EntityTypeBuilder<Favourite> builder)
        {
            builder.HasKey(k => new { k.UserId, k.StampId });

            builder.HasOne(x => x.Picture)
                .WithMany(x => x.Favourites)
                .HasForeignKey(x => x.StampId);
        }
    }
}
