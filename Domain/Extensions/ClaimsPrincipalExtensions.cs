using System.Security.Claims;

using Domain.Constants;

namespace Domain.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string? GetUserUid(this ClaimsPrincipal principal)
        {
            return GetClaimValue(principal, Claims.Subject);
        }

        private static string? GetClaimValue(ClaimsPrincipal principal, string claimType)
        {
            return principal.Claims.FirstOrDefault(it => it.Type == claimType)?.Value;
        }
    }
}
