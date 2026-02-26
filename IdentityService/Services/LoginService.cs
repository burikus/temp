using Domain.Core;
using Domain.Extensions;
using Domain.Interfaces;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Interfaces;
using IdentityService.Models;

using Microsoft.AspNetCore.Identity;

namespace IdentityService.Services
{
    public class LoginService : ILoginService
    {
        private readonly ITokenProvider _tokenProvider;
        private readonly SignInManager<User> _signInManager;
        private readonly IDateTimeProvider _dateTimeProvider;
        public LoginService(            
            ITokenProvider tokenProvider,
            SignInManager<User> signInManager,
            IDateTimeProvider dateTimeProvider)
        {
            _tokenProvider = tokenProvider ?? throw new ArgumentNullException(nameof(tokenProvider));
            _signInManager = signInManager ?? throw new ArgumentNullException(nameof(signInManager));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
        }

        public async Task<Result<JwtModel>> LoginAsync(LoginModel model)
        {
            var user = await _signInManager.UserManager.FindByEmailAsync(model.Email)
                .ConfigureAwait(false);

            if (user != null)
            {
                if (!user.Active)
                {
                    return Result<JwtModel>.BadRequest("Подтвердите регистрацию. Письмо было отправлено на почту");
                }

                var roles = await _signInManager.UserManager.GetRolesAsync(user)
                    .ConfigureAwait(false);

                if (model.Password.ObjectToString().Equals(user.PasswordHash))
                {
                    var jwt = _tokenProvider.Generate(new UserJwtModel { Uid = Guid.Parse(user.Id), RoleNames = roles });

                    user.LastSuccessfulLogin = _dateTimeProvider.UtcNow;
                    await _signInManager.UserManager.UpdateAsync(user).ConfigureAwait(false);

                    return Result<JwtModel>.Ok(jwt);
                }

                return Result<JwtModel>.BadRequest("Неправльный логин или пароль");
            }

            return Result<JwtModel>.BadRequest("Неправильный адрес эл.почты");
        }
    }
}
