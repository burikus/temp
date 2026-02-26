using System;
using System.Threading.Tasks;

using Domain.Constants;
using Domain.Interfaces;
using IdentityService.Domain.Commands;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Validators;
using IdentityService.Interfaces;
using IdentityService.Models;
using IdentityService.Services;
using ServiceConfiguration.Base;

using FluentValidation;

using MediatR;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using Swashbuckle.AspNetCore.Annotations;

namespace IdentityService.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Produces("application/json")]
    public class AccountController : WebApiControllerBase
    {
        private readonly ILoginService _loginService;
        private readonly IAccountNotificationService _accountNotificationService;
        private readonly UserManager _userManager;

        public AccountController(
            IMapper mapper,
            IMediator mediator,
            IUserProvider userProvider,
            ILoginService loginService,
            IAccountNotificationService accountNotificationService,
            UserManager userManager
            ) : base(mapper, mediator, userProvider)
        {
            _loginService = loginService ?? throw new ArgumentNullException(nameof(loginService));
            _accountNotificationService = accountNotificationService ?? throw new ArgumentNullException(nameof(accountNotificationService));
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
        }

        [AllowAnonymous]
        [HttpPost("~/api/login")]
        [SwaggerOperation(
            summary: "Sign in.",
            description: "Sign in."
        )]
        [SwaggerResponse(200, "OK", typeof(JwtModel), "application/json")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var result = await _loginService.LoginAsync(model).ConfigureAwait(false);

            return CreateResponse(result);
        }

        //[Authorize(Roles = RoleName.User + "," + RoleName.Admin)]
        [Authorize(Policy = AuthorizationPolicyConstants.UserAuthorization)]
        [HttpPost("~/api/logout")]
        [SwaggerOperation(
            summary: "Sign out.",
            description: "Sign out."
        )]
        public Task<IActionResult> Logout()
        {
            //HttpContext.Response.Cookies.Delete(AuthCookieKey, CookieOptions());
            return Task.FromResult(CreateResponse(OkMessageResponse("Успешный выход из системы")));
        }

        [AllowAnonymous]
        [HttpPost("~/api/register")]
        [SwaggerOperation(
           summary: "Registration.",
           description: "Register new user."
        )]
        [SwaggerResponse(201, "Created", typeof(IdentityResult), "application/json")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterModel model)
        {
            try
            {
                var command = new RegisterNewUserCommand
                {
                    Name = model.Name,
                    Password = model.Password,
                    Email = model.Email,
                    FamilyName = model.FamilyName,
                    RoleNames = new[] { RoleName.User }
                };

                var result = await Mediator.Send(command).ConfigureAwait(false);


                if (!result.Value.IdentityResult.Succeeded)
                {
                    if (result.Value.Uid.HasValue)
                    {
                        await _accountNotificationService.SendConfirmAccountEmailMessageAsync(new NotificationRecipient(result.Value.Uid.Value, model.Email)).ConfigureAwait(false);

                        return CreateResponse(OkMessageResponse("Для подтверждения регистрации проверьте почту. (в тч спам)  \n\n Подтвердите пжста регистрацию в течение суток."));
                    }

                    return BadRequest(ProblemAssembler.ValidationDetails(ResultErrorsHelper.IdentityResultErrorsFrom(result.Value.IdentityResult)));
                }

                await _accountNotificationService.AddRolesToUser(result.Value.Uid.ToString(), model.Email, command.RoleNames).ConfigureAwait(false);

                await _accountNotificationService.SendConfirmAccountEmailMessageAsync(new NotificationRecipient(result.Value.Uid.Value, model.Email)).ConfigureAwait(false);

                return CreateResponse(OkMessageResponse("Для подтверждения регистрации проверьте почту, в тч спам.  \n\n Подтвердите пжста регистрацию в течение суток."));
            }
            catch (ValidationException ex)
            {
                return CreateResponse(ValidationFailure(ex.Errors));
            }
        }

        [AllowAnonymous]
        [HttpPost("~/api/restore")]
        [SwaggerOperation(
        summary: "Restore Password.",
            description: "Restore Password. Email password to user."
        )]
        [SwaggerResponse(200, "Ok")]
        public async Task<IActionResult> RestorePassword([FromBody] RestorePasswordModel model)
        {
            var result = await _userManager.RestorePasswordAsync(model.Email);

            if (!result.Succeeded)
            {
                return CreateResponse(ValidationFailure(["Указанный email не зарегистрирован на сайте."]));
            }

            await _accountNotificationService.PasswordRestoreMessageAsync(model.Email).ConfigureAwait(false);

            return CreateResponse(OkMessageResponse("Письмо отправлено на указанную почту. \n\n Подтвердите пжста регистрацию в течение суток."));
        }


        //private static IDictionary<string, string[]> ErrorsFrom(IdentityResult result)
        //{
        //	return result.Errors
        //		.Select(it => new Tuple<string, string>(FieldFor(it.Code), it.Description))
        //		.GroupBy(k => k.Item1, e => e.Item2)
        //		.ToDictionary(k => k.Key, e => e.ToArray());

        //	string FieldFor(string code)
        //	{
        //		if (code.Contains("Password")) return "Password";
        //		if (code.Contains("Email") || code.Contains("UserName")) return "Email";

        //		return code;
        //	}
        //}
    }
}
