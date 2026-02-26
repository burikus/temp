using Microsoft.AspNetCore.Identity;

namespace IdentityService.Domain.DataAccess.Entities
{
    public class Role : IdentityRole
    {
        public Role() : base()
        {
        }

        //public Role(string id, string name) : base()
        //{
        //    base.Id = id;
        //    base.Name = name;
        //    base.NormalizedName = name?.ToUpper();
        //}

        //public string Name { get; set; }
        //public string NormalizedName { get; set; } // new
        public string ConcurrencyStamp { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
