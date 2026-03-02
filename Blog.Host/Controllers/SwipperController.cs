using Blog.Core.Models.Infos;
using Blog.Core.Services.Contracts;

using Domain.Constants;
using Domain.Interfaces;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Swashbuckle.AspNetCore.Annotations;

namespace Blog.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class SwipperController : WebApiControllerBase
    {
        private readonly ISwipperService _sqipperService;

        public SwipperController(IUserProvider userProvider, ISwipperService swipperService) : base(userProvider)
        {
            _sqipperService = SystemObjects.RequireNotNull(swipperService, nameof(swipperService));
        }

        [AllowAnonymous]
        [HttpGet("~/api/setting/swipper")]
        [SwaggerOperation(
          summary: "Get swippers.",
          description: "Get swippers."
       )]
        [SwaggerResponse(200, "OK", typeof(SwippersResponseModel))]
        public async Task<IActionResult> GetSwippers()
        {
            var result = await _sqipperService.AllSwippersAsync(UserProvider.IsAdmin());

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/swipper")]
        [SwaggerOperation(
           summary: "Add swippers.",
           description: "Add swippers for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string), "application/json")]
        public async Task<IActionResult> AddSwippers([FromBody] SwippersCreateModel model)
        {
            var result = await _sqipperService.AddSwippersAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/swipper")]
        [SwaggerOperation(
           summary: "Update swippers.",
           description: "Update swippers  for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> UpdateSwippers([FromBody] SwippersUpdateModel model)
        {
            var result = await _sqipperService.UpdateSwippersAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/swipper")]
        [SwaggerOperation(
          summary: "Delete swippers",
          description: "Delete swippers for admin."
       )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> DeleteSwippers([FromBody] SwippersDeleteModel model)
        {
            var result = await _sqipperService.DeleteSwippersAsync(model);

            return CreateResponse(result);
        }
    }
}
