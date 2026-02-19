using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.StampSeries;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class StampSeriesController : WebApiControllerBase
    {
        private readonly IStampSeriesService _stampSeriesService;

        public StampSeriesController(IStampSeriesService stampSeriesService) : base()
        {
            _stampSeriesService = SystemObjects.RequireNotNull(stampSeriesService, nameof(stampSeriesService));
        }

        #region StampSeries
        [HttpGet("~/api/setting/stampseries")]
        [SwaggerOperation(
         summary: "Get stampseries.",
         description: "Get stampseries for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(StampSeriesesResponseModel))]
        public async Task<IActionResult> GetStampSerieses()
        {
            var result = await _stampSeriesService.AllStampSeriesesAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/stampseries")]
        [SwaggerOperation(
         summary: "Create stampseries.",
         description: "Create stampseries for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreateStampSerieses(CreateStampSeriesesModel model)
        {
            var result = await _stampSeriesService.AddStampSeriesesAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/stampseries")]
        [SwaggerOperation(
         summary: "Update stampseries.",
         description: "Update stampseries for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateRasters(UpdateStampSeriesesModel model)
        {
            var result = await _stampSeriesService.UpdateStampSeriesesAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/stampseries")]
        [SwaggerOperation(
         summary: "Delete stampseries.",
         description: "Delete stampseries for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeleteStampSerieses(DeleteStampSeriesesModel model)
        {
            var result = await _stampSeriesService.DeleteStampSeriesesAsync(model);

            return CreateResponse(result);
        }
        #endregion StampSeries
    }
}
