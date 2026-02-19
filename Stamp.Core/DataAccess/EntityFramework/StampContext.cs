using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.EntityFramework
{
    public class StampContext : DbContext
    {
        public DbSet<StampCatalog> StampCatalog { get; set; }

        public DbSet<Catalog> Catalog { get; set; }
        public DbSet<StampCatalog> CatalogStamp { get; set; }
        public DbSet<StampType> StampType { get; set; }
        public DbSet<Picture> Picture { get; set; }
        public DbSet<Paper> Paper { get; set; }
        public DbSet<Perforation> Perforation { get; set; }
        public DbSet<PrintType> PrintType { get; set; }
        public DbSet<Raster> Raster { get; set; }
        public DbSet<Watermark> Watermark { get; set; }
        public DbSet<StampInfo> Stamp { get; set; }
        public DbSet<StampSeries> StampSeries { get; set; }
        public DbSet<Theme> Theme { get; set; }
        public DbSet<SubTheme> SubTheme { get; set; }
        public DbSet<Country> Country { get; set; }
        public DbSet<PictureSetting> PictureSetting { get; set; }
        public DbSet<Background> Background { get; set; }
        public DbSet<Menu> Menu { get; set; }
        public DbSet<SubMenu> SubMenu { get; set; }
        public DbSet<TextFormatting> TextFormatting { get; set; }
        public DbSet<Favourite> Favourite { get; set; }


        public StampContext(DbContextOptions<StampContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(StampContext).Assembly);
        }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder
                .Properties<DateTime>()
                .HaveConversion(typeof(UtcValueConverter));
        }

        class UtcValueConverter : ValueConverter<DateTime, DateTime>
        {
            public UtcValueConverter()
                : base(v => v, v => DateTime.SpecifyKind(v, DateTimeKind.Utc))
            {
            }
        }
    }
}
