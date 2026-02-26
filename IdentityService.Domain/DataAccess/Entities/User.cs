using Microsoft.AspNetCore.Identity;

namespace IdentityService.Domain.DataAccess.Entities
{
    public class User : IdentityUser
    {
        public User() : base()
        {
        }

        public User(string id, string email, bool active) : base(email)
        {
            base.Id = id;
            base.Email = email;
            Active = active;
        }

        public string UserName { get; set; }
        public string? FamilyName { get; set; }
        public bool Active { get; set; }
        public bool Subscription {  get; set; }

        public DateTime? CreationEmailConfirmationLinkDate { get; set; }
        public bool EmailConfirmationExpired { get; set; }

        public User OnConfirmationEmailSent(DateTime creationEmailConfirmationLinkDate)
        {
            CreationEmailConfirmationLinkDate = creationEmailConfirmationLinkDate;
            EmailConfirmationExpired = false;

            return this;
        }

        public byte[]? Avatar { get; set; }
        public DateTime? LastSuccessfulLogin { get; set; }
        public DateTime CreatedDate { get; set; }
        public string FullName { get; set; }

        public virtual ICollection<Role> Roles { get; set; }
    }
}
