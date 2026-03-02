using Domain.Constants;
using Domain.CQRS;
using Domain.Interfaces;
using IdentityService.Areas.Identity;
using IdentityService.Domain.Commands;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Queries;
using IdentityService.Models;
using ServiceConfiguration.Base;

using FluentValidation;

using MediatR;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Swashbuckle.AspNetCore.Annotations;

using static IdentityService.Domain.DataAccess.Specifications.FeedbackMessagesSpecs;

namespace IdentityService.Controllers
{
    [Produces("application/json")]
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]

    public class FeedbackController : WebApiControllerBase
    {
        private readonly IDateTimeProvider _dateTimeProvider;
        private readonly IAccountNotificationService _accountNotificationService;

        public FeedbackController(
            IMapper mapper, 
            IMediator mediator, 
            IUserProvider userProvider, 
            IDateTimeProvider dateTimeProvider,
            IAccountNotificationService accountNotificationService)
            : base(mapper, mediator, userProvider)
        {
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
            _accountNotificationService = accountNotificationService;
        }

        [HttpPost("~/api/feedback")]
        [Authorize(Policy = AuthorizationPolicyConstants.UserAuthorization)]
        [SwaggerOperation(
            summary: "Send feedback.",
            description: "Send feedback."
        )]
        [SwaggerResponse(200, "Ok", typeof(BaseCommandResult))]
        public async Task<IActionResult> SendMessage([FromBody] CreateFeedbackMessageModel inputCommand)
        {
            try
            {
                var userId = UserProvider.GetUserIdentifier();
                var command = new CreateFeedbackMessageCommand()
                {
                    UserId = userId,
                    Message = inputCommand.Message,
                    AskedDateTime = _dateTimeProvider.UtcNow
                };
                var result = await Mediator.Send(command).ConfigureAwait(false);

                await _accountNotificationService.SendUserMessageInternal(userId, inputCommand.Message);

                return CreateResponse(result);
            }
            catch (ValidationException ex)
            {
                return CreateResponse(ValidationFailure(ex.Errors));
            }
        }

        [HttpGet("~/api/feedback")]
        [Authorize(Policy = AuthorizationPolicyConstants.UserAuthorization)]
        [SwaggerOperation(
            summary: "Get feedbacks.",
            description: "Get feedback for user or all feedbacks for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(UserFeedbackMessageModel))]
        public async Task<IActionResult> GetMessages()
        {
            var command = new UserFeedbackMessagesQuery()
            {
                UserId = UserProvider.GetUserIdentifier(),
                IsAdmin = UserProvider.IsAdmin()
            };

            var result = await Mediator.Send(command).ConfigureAwait(false);

            return CreateResponse(result, Mapper.Map<UserFeedbackMessageModel>);
        }
    }
}
