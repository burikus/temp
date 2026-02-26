using Domain.Constants;
using Domain.CQRS;
using Domain.Interfaces;
using Domain.Models;

using FluentValidation;

using IdentityService.Domain.Commands;
using IdentityService.Domain.Queries;
using IdentityService.Models;

using MediatR;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Swashbuckle.AspNetCore.Annotations;

namespace IdentityService.Controllers
{
    [Authorize(Policy = AuthorizationPolicyConstants.UserAuthorization)]
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    public class UserController : WebApiControllerBase
    {
        public UserController(
            IMapper mapper,
            IMediator mediator,
            IUserProvider userProvider
            ) : base(mapper, mediator, userProvider)
        {
        }

        //[Authorize]
        //[HttpGet]
        //public async Task<IActionResult> GetProfile()
        //{
        //    var id = UserProvider
        //        .GetUserIdentifier()
        //        .ToString();

        //    var user = await _userManager.FindByIdAsync(id)
        //        .ConfigureAwait(false);

        //    var roles = await _userManager.GetRolesAsync(user)
        //        .ConfigureAwait(false);

        //    var profileModel = new UserModel
        //    {
        //        Uid = user.Id,
        //        ClientUid = user.ClientUid,
        //        Name = user.Name,
        //        LegacyId = user.ClientId,
        //        LegacySiteId = user.SiteId,
        //        Email = user.Email,
        //        ClientName = user.ClientName,
        //        RoleNames = roles,
        //        ClientCode = user.ClientCode,
        //        ClientCustomLogo = user.ClientLogoUid.HasValue
        //    };

        //    return CreateResponse(Result<UserModel>.Ok(profileModel));
        //}

        [HttpPut("~/api/user")]
        [SwaggerOperation(
            summary: "Update user data.",
            description: "Update user info excluding email & role."
        )]
        [SwaggerResponse(200, "OK", typeof(ApiCollectionResultModel<UpdateCommandResult>), "application/json")]
        public async Task<IActionResult> UpdateUser([FromBody] UpdateUserModel model)
        {
            try
            {
                var command = new UpdateUserCommand
                {
                    Uid = UserProvider.GetUserIdentifier(),
                    Password = model.Password,
                    Name = model.Name,
                    FamilyName = model.FamilyName,
                    Phone = model.Phone,
                    Subscription = model.Subscription,
                    Avatar = !string.IsNullOrEmpty(model.Avatar) ? Convert.FromBase64String(model.Avatar) : default
                };

                var result = await Mediator.Send(command).ConfigureAwait(false);

                return CreateResponse(result);
            }
            catch (ValidationException ex)
            {
                return CreateResponse(ValidationFailure(ex.Errors));
            }
        }

        [HttpGet("~/api/users")]
        [SwaggerOperation(
            summary: "Get users data.",
            description: "Get all users info if Admin, otherwise just current user info."
        )]
        [SwaggerResponse(200, "OK", typeof(ApiCollectionResultModel<UserInfoModel>), "application/json")]
        public async Task<IActionResult> GetProfiles()
        {
            try
            {
                var command = new UserInfoQuery
                {
                    Uid = UserProvider.GetUserIdentifier(),
                    IsUserAdmin = UserProvider.IsAdmin()
                };

                var result = await Mediator.Send(command).ConfigureAwait(false);

                return CreateResponse(result, Mapper.Map<ApiCollectionResultModel<UserInfoModel>>);
            }
            catch (ValidationException ex)
            {
                return CreateResponse(ValidationFailure(ex.Errors));
            }
        }

        //[Authorize(Policy = AuthorizationPolicyConstants.UserAuthorization)]
        //[HttpGet("~/api/user")]
        //[SwaggerOperation(
        //    summary: "Get user data.",
        //    description: "Get user info."
        //)]
        //[SwaggerResponse(200, "OK", typeof(ApiCollectionResultModel<UserInfoModel>), "application/json")]
        //public async Task<IActionResult> GetProfile()
        //{
        //    var command = new GetUserInfoQuery
        //    {
        //        Uid = UserProvider.GetUserIdentifier(),
        //        IsUserAdmin = false
        //    };

        //    var result = await Mediator.Send(command).ConfigureAwait(false);

        //    return CreateResponse(result, Mapper.Map<ApiCollectionResultModel<UserInfoModel>>);
        //}

        [HttpGet("~/api/user/isadmin")]
        [SwaggerOperation(
            summary: "Is user admin.",
            description: "Is user admin."
        )]
        [SwaggerResponse(200, "OK", typeof(ApiCollectionResultModel<UserInfoModel>), "application/json")]
        public async Task<IActionResult> IsAdmin()
        {
            return Ok(UserProvider.IsAdmin());
        }
    }
}
