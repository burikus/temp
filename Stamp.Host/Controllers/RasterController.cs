using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Rasters;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class RasterController : WebApiControllerBase
    {
        private readonly IRasterService _rasterService;

        public RasterController(IRasterService rasterService) : base()
        {
            _rasterService = SystemObjects.RequireNotNull(rasterService, nameof(rasterService));
        }

        #region Raster
        [HttpGet("~/api/setting/raster")]
        [SwaggerOperation(
         summary: "Get rasters.",
         description: "Get rasters for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(RastersResponseModel))]
        public async Task<IActionResult> GetRasters()
        {
            var result = await _rasterService.AllRastersAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/raster")]
        [SwaggerOperation(
         summary: "Create rasters.",
         description: "Create rasters for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreateRasters(CreateRastersModel model)
        {
            var result = await _rasterService.AddRastersAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/raster")]
        [SwaggerOperation(
         summary: "Update rasters.",
         description: "Update rasters for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateRasters(UpdateRastersModel model)
        {
            var result = await _rasterService.UpdateRastersAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/raster")]
        [SwaggerOperation(
         summary: "Delete rasters.",
         description: "Delete rasters for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeleteRasters(DeleteRastersModel model)
        {
            var result = await _rasterService.DeleteRastersAsync(model);

            return CreateResponse(result);
        }
        #endregion Raster
    }
}
