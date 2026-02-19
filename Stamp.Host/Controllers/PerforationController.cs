using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Perforations;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class PerforationController : WebApiControllerBase
    {
        private readonly IPerforationService _perforationService;

        public PerforationController(IPerforationService perforationService) : base()
        {
            _perforationService = SystemObjects.RequireNotNull(perforationService, nameof(perforationService));
        }

        #region Perforation
        [HttpGet("~/api/setting/perforation")]
        [SwaggerOperation(
          summary: "Get perforations.",
          description: "Get perforations for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(PerforationsResponseModel))]
        public async Task<IActionResult> GetPerforations()
        {
            var result = await _perforationService.AllPerforationsAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/perforation")]
        [SwaggerOperation(
          summary: "Create perforations.",
          description: "Create perforations for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreatePerforations(CreatePerforationsModel model)
        {
            var result = await _perforationService.AddPerforationsAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/perforation")]
        [SwaggerOperation(
          summary: "Update perforations.",
          description: "Update perforations for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdatePerforations(UpdatePerforationsModel model)
        {
            var result = await _perforationService.UpdatePerforationsAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/perforation")]
        [SwaggerOperation(
          summary: "Delete perforations.",
          description: "Delete perforations for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> Deleteerforations(DeletePerforationsModel model)
        {
            var result = await _perforationService.DeletePerforationsAsync(model);

            return CreateResponse(result);
        }
        #endregion Perforation
    }
}
