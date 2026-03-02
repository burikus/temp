using FluentMigrator;

namespace Blog.Host.Migrations
{
    public abstract class BlogMigrationBase : Migration
    {
        public string Name => GetType().Name;

        public override void Up()
        {
            Execute.EmbeddedScript($"{Name}_Up.sql");
        }

        public override void Down()
        {
            Execute.EmbeddedScript($"{Name}_Down.sql");
        }
    }
}
