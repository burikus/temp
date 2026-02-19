using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Backgrounds;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class BackgroundController : WebApiControllerBase
    {
        private readonly IBackgroundService _backgroundService;

        public BackgroundController(IBackgroundService backgroundService) : base()
        {
            _backgroundService = SystemObjects.RequireNotNull(backgroundService, nameof(backgroundService));
        }

        [AllowAnonymous]
        [HttpGet("~/api/setting/background")]
        [SwaggerOperation(
          summary: "Get backgrounds.",
          description: "Get backgrounds."
       )]
        [SwaggerResponse(200, "OK", typeof(BackgroundsResponseModel))]
        public async Task<IActionResult> GetBackgroundSettings()
        {
            var result = await _backgroundService.AllBackgroundsAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/background")]
        [SwaggerOperation(
           summary: "Add background.",
           description: "Add backgrounds for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string), "application/json")]
        public async Task<IActionResult> AddBackgroundSettings([FromBody] CreateBackgroundsModel model)
        {
            var result = await _backgroundService.AddBackgroundsAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/background")]
        [SwaggerOperation(
           summary: "Update backgrounds.",
           description: "Update backgrounds  for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> UpdateBackgroundSettings([FromBody] UpdateBackgroundsModel model)
        {
            var result = await _backgroundService.UpdateBackgroundsAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/background")]
        [SwaggerOperation(
          summary: "Delete backgrounds",
          description: "Delete backgrounds for admin."
       )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> DeleteBackgroundSettings([FromBody] DeleteBackgroundsModel model)
        {
            var result = await _backgroundService.DeleteBackgroundsAsync(model);

            return CreateResponse(result);
        }
    }
}
