using Domain.Constants;
using Domain.CQRS;
using Domain.Interfaces;

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
    [Produces("application/json")]
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]

    public class MyDetailController : WebApiControllerBase
    {
        public MyDetailController(IMapper mapper, IMediator mediator, IUserProvider userProvider)
            : base(mapper, mediator, userProvider)
        {
        }

        [HttpPost("~/api/mydetails")]
        [SwaggerOperation(
            summary: "Save my details.",
            description: "Save my details."
        )]
        [SwaggerResponse(200, "Ok", typeof(BaseCommandResult))]
        public async Task<IActionResult> SaveDetails([FromBody] MyDetailsModel input)
        {
            var command = new UpdateMyDetailsCommand()
            {
                Uid = input.Uid,
                Text = input.AboutmeText,
                Font = input.AboutmeFont,
                FontSize = input.AboutmeFontSize,
                FontColor = input.AboutmeFontColor,
                Align = input.AboutmeAlign,
                FontStyleWeight = input.AboutmeFontStyleWeight,
            };
            var result = await Mediator.Send(command).ConfigureAwait(false);

            return CreateResponse(result);
        }

        [HttpGet("~/api/mydetails")]
        [AllowAnonymous]
        [SwaggerOperation(
            summary: "Get my details.",
            description: "Get details for Обо мне"
        )]
        [SwaggerResponse(200, "Ok", typeof(MyDetailsModel))]
        public async Task<IActionResult> GetDetails()
        {
            var result = await Mediator.Send(new MyDetailsQuery()).ConfigureAwait(false);

            return CreateResponse(result, Mapper.Map<MyDetailsModel>);
        }


        [HttpPost("~/api/newsletter")]
        [SwaggerOperation(
           summary: "Save newsletter details.",
           description: "Save newsletter details."
       )]
        [SwaggerResponse(200, "Ok", typeof(BaseCommandResult))]
        public async Task<IActionResult> SaveNewsletter([FromBody] NewsLetterUserModel input)
        {
            var command = new UpdateMyDetailsCommand()
            {
                Uid = input.Uid,
                Text = input.NewsletterText,
                Font = input.NewsletterFont,
                FontSize = input.NewsletterFontSize,
                FontColor = input.NewsletterFontColor,
                Align = input.NewsletterAlign,
                FontStyleWeight = input.NewsletterFontStyleWeight,
            };
            var result = await Mediator.Send(command).ConfigureAwait(false);

            return CreateResponse(result);
        }

        [HttpGet("~/api/newsletter")]
        [AllowAnonymous]
        [SwaggerOperation(
           summary: "Get newsletter details.",
           description: "Get details for newsletter"
       )]
        [SwaggerResponse(200, "Ok", typeof(NewsLetterUserModel))]
        public async Task<IActionResult> GetNewsletter()
        {
            var result = await Mediator.Send(new NewsletterQuery()).ConfigureAwait(false);

            return CreateResponse(result, Mapper.Map<NewsLetterUserModel>);
        }

        [HttpGet("~/api/subscribers")]
        [SwaggerOperation(
            summary: "Get subscribed to newsletter",
            description: "Get subscribed to the mailing list"
        )]
        [SwaggerResponse(200, "Ok", typeof(SubscribersModel))]
        public async Task<IActionResult> GetSubscribed()
        {
            var result = await Mediator.Send(new SubscribersQuery()).ConfigureAwait(false);

            return CreateResponse(result, Mapper.Map<SubscribersModel>);
        }
    }
}
