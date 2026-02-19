using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.PictureSettings;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class SettingController : WebApiControllerBase
    {
        private readonly IPictureSettingService _pictureSettingService;
        private readonly IProcessImageService _processImageService;

        public SettingController(
            IPictureSettingService pictureSettingService,
            IProcessImageService processImageService) : base()
        {
            _pictureSettingService = SystemObjects.RequireNotNull(pictureSettingService, nameof(pictureSettingService));
            _processImageService = SystemObjects.RequireNotNull(processImageService, nameof(processImageService));
        }

        [HttpGet("~/api/setting-watermark/picture")]
        [SwaggerOperation(
         summary: "Get picture settings.",
         description: "Get picture watermark settings for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(PictureSettingResponseModel[]))]
        public async Task<IActionResult> GetPictureWatermark()
        {
            var result = await _pictureSettingService.AllPictureSettingsAsync();

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting-watermark/picture")]
        [SwaggerOperation(
         summary: "Update picture settings.",
         description: "Update picture watermark settings for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(UpdatePictureSettingModel))]
        public async Task<IActionResult> UpdatePictureWatermark(UpdatePictureSettingModel model)
        {
            model = await _processImageService.ResizeAndAddWatermarkSample(model).ConfigureAwait(false);

            var result = await _pictureSettingService.UpdatePictureSettingsAsync(model);

            return CreateResponse(result);
        }
    }
}
