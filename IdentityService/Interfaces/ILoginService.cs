using Domain.Core;

using IdentityService.Models;

namespace IdentityService.Interfaces
{
    public interface ILoginService
    {
        Task<Result<JwtModel>> LoginAsync(LoginModel model);
    }
}
