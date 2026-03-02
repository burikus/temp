using FluentMigrator;

namespace IdentityService.Migrations
{
    [Migration(202410121200)]
    public class M202410121200_AddAboutMeSchema : Migration
    {
        public override void Up()
        {           
            Insert.IntoTable("MyDetails")
                .Row(new
                {
                    Id = "dda59251-091f-4385-1111-320d49298267",
                    Text = string.Empty,
                    Font = "Arbor",
                    FontSize = "20px",
                    FontColor = "black",
                    FontStyleWeight = 0,
                    Align = "left",
                    IsAboutme = true
                })
                .Row(new
                {
                    Id = "eea59251-091f-4385-1111-320d49298267",
                    Text = string.Empty,
                    Font = "Arbor",
                    FontSize = "20px",
                    FontColor = "black",
                    FontStyleWeight = 0,
                    Align = "left",
                    IsNewsletter = true
                });
        }

        public override void Down()
        {
            Delete.Table("MyDetails");
        }
    }
}
