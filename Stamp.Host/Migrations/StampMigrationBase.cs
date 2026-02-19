using FluentMigrator;

namespace Stamp.Host.Migrations
{
    public abstract class StampMigrationBase : Migration
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
