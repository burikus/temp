using IdentityService.Models;

namespace IdentityService.Interfaces
{
    public interface ITokenProvider
    {
        JwtModel Generate(UserJwtModel user);
    }
}
