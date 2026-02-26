using System.Security.Claims;

using IdentityService.Domain.DataAccess.Entities;

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace IdentityService.IdentityData
{
    public class UserClaimsPrincipalFactory : UserClaimsPrincipalFactory<User, Role>
    {
        public UserClaimsPrincipalFactory(
            UserManager<User> userManager,
            RoleManager<Role> roleManager,
            IOptions<IdentityOptions> optionsAccessor)
            : base(userManager, roleManager, optionsAccessor)
        { }

        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(User user)
        {
            var id = new ClaimsIdentity("Identity.Application",
                Options.ClaimsIdentity.UserNameClaimType,
                Options.ClaimsIdentity.RoleClaimType);

            id.AddClaim(new Claim(Options.ClaimsIdentity.UserIdClaimType, user.Id.ToString()));
            id.AddClaim(new Claim(Options.ClaimsIdentity.UserNameClaimType, user.UserName));

            if (UserManager.SupportsUserEmail)
            {
                var email = await UserManager
                    .GetEmailAsync(user)
                    .ConfigureAwait(false);

                if (!string.IsNullOrEmpty(email))
                {
                    id.AddClaim(new Claim(Options.ClaimsIdentity.EmailClaimType, email));
                }
            }

            if (UserManager.SupportsUserRole)
            {
                var roles = await UserManager
                    .GetRolesAsync(user)
                    .ConfigureAwait(false);

                foreach (var roleName in roles)
                {
                    id.AddClaim(new Claim(Options.ClaimsIdentity.RoleClaimType, roleName));

                    if (RoleManager.SupportsRoleClaims)
                    {
                        var role = await RoleManager
                            .FindByNameAsync(roleName)
                            .ConfigureAwait(false);

                        if (role != null)
                        {
                            var claims = await RoleManager
                                .GetClaimsAsync(role)
                                .ConfigureAwait(false);

                            id.AddClaims(claims);
                        }
                    }
                }
            }

            return id;
        }
    }
}
