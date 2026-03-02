using Blog.Domain.DataAccess.Entities;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Blog.Core.DataAccess.EntityFramework
{
    public class BlogContext : DbContext
    {
        public DbSet<Background> Background { get; set; }
        public DbSet<MicroBlog> MicroBlog { get; set; }
        public DbSet<Menu> Menu { get; set; }
        public DbSet<Info> Info { get; set; }
        public DbSet<Swipper> Swipper { get; set; }
        public DbSet<TextFormatting> TextFormatting { get; set; }


        public BlogContext(DbContextOptions<BlogContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(BlogContext).Assembly);
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
