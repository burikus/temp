using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Watermarks;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class WatermarkController : WebApiControllerBase
    {
        private readonly IWatermarkService _watermarkService;

        public WatermarkController(IWatermarkService watermarkService) : base()
        {
            _watermarkService = SystemObjects.RequireNotNull(watermarkService, nameof(watermarkService));
        }

        #region Watermark
        [HttpGet("~/api/setting/watermark")]
        [SwaggerOperation(
         summary: "Get watermarks.",
         description: "Get watermarks for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(WatermarksResponseModel[]))]
        public async Task<IActionResult> GetvWatermarks()
        {
            var result = await _watermarkService.AllWatermarksAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/watermark")]
        [SwaggerOperation(
         summary: "Create watermarks.",
         description: "Create watermarks for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreateWatermarks(CreateWatermarksModel model)
        {
            var result = await _watermarkService.AddWatermarksAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/watermark")]
        [SwaggerOperation(
         summary: "Update watermarks.",
         description: "Update watermarks for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateWatermarks(UpdateWatermarksModel model)
        {
            var result = await _watermarkService.UpdateWatermarksAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/watermark")]
        [SwaggerOperation(
         summary: "Delete watermarks.",
         description: "Delete watermarks for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeleteWatermarks(DeleteWatermarksModel model)
        {
            var result = await _watermarkService.DeleteWatermarksAsync(model);

            return CreateResponse(result);
        }
        #endregion Watermark
    }
}
