using FluentMigrator;

namespace IdentityService.Migrations
{
    public abstract class IdentityMigrationBase : Migration
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
