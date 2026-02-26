using Domain.DataAccess.Specifications;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Entities.Relations;

namespace IdentityService.Domain.DataAccess.FetchStrategies
{
    public class UserJoinStrategies
    {
        public class WithUserRoles : JoinStrategy<User>
        {
            public WithUserRoles()
            {
                NavigationProperty = item => item.Roles;
            }
        }

        public class WithRole : JoinStrategy<UserRole>
        {
            public WithRole()
            {
                NavigationProperty = item => item.RoleId;
            }
        }
    }
}
