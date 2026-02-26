using FluentMigrator;

using System;

namespace IdentityService.Migrations
{
    [Migration(202201151300)]
    public class M202201151300_InitialMigration : Migration
    {
        public override void Up()
        {           
            Insert.IntoTable("AspNetUsers")
                .Row(new
                {
                    Id = "cd472a63-8998-4897-1111-dc597ef3c8de",
                    UserName = "Gleb",
                    FamilyName = "B",
                    Email = "1mrgleb@gmail.com",
                    NormalizedEmail = "1MRGLEB@GMAIL.COM",
                    PasswordHash = "AAEAAAD/////AQAAAAAAAAAGAQAAAAtwQGxvQGx0bzQwMws=",
                    CreatedDate = DateTime.UtcNow,
                    FullName = "Gleb B",
                    Active = true,
                    EmailConfirmed = true,
                    PhoneNumberConfirmed = true,
                    TwoFactorEnabled = false,
                    LockoutEnabled = false,
                    AccessFailedCount = 0
                });

            Insert.IntoTable("AspNetRoles")
                .Row(new
                {
                    Id = "009b758b-0554-453c-972b-969b41cb332e",
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                });

            Insert.IntoTable("AspNetRoles")
                .Row(new
                {
                    Id = "0e9b758b-0554-453c-972b-969b41cb332e",
                    Name = "User",
                    NormalizedName = "USER"
                });
            Insert.IntoTable("Role")
                .Row(new
                {
                    Id = "009b758b-0554-453c-972b-969b41cb332e",
                });

            Insert.IntoTable("Role")
                .Row(new
                {
                    Id = "0e9b758b-0554-453c-972b-969b41cb332e",
                });
           
            Insert.IntoTable("UserRole")
                .Row(new
                {
                    UserId = "cd472a63-8998-4897-1111-dc597ef3c8de",
                    RoleId = "009b758b-0554-453c-972b-969b41cb332e"
                });
            Insert.IntoTable("UserRole")
                .Row(new
                {
                    UserId = "cd472a63-8998-4897-1111-dc597ef3c8de",
                    RoleId = "0e9b758b-0554-453c-972b-969b41cb332e"
                });
        }

        public override void Down()
        {
        }
    }
}
