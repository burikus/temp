using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework.Configurations
{
    public class StampSeriesMap : IEntityTypeConfiguration<StampSeries>
    {
        public void Configure(EntityTypeBuilder<StampSeries> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Text)
                .IsRequired();
            builder.Property(x => x.Date)
                .IsRequired();

            builder
                .HasMany(r => r.Stamps)
                .WithOne(r => r.StampSeries)
                .HasForeignKey(x => x.StampSeriesId);
        }
    }
}
