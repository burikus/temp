using Domain.Constants;
using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models;
using Stamp.Core.Models.Pictures;
using Stamp.Core.Models.StampInfos;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]

    public class StampController : WebApiControllerBase
    {
        private readonly IPictureService _pictureService;
        private readonly IStampInfoService _stampInfoService;
        private readonly IProcessImageService _processImageService;

        public StampController(
            IPictureService pictureService,
            IStampInfoService stampInfoService,
            IProcessImageService processImageService
        ) : base()
        {
            _pictureService = SystemObjects.RequireNotNull(pictureService, nameof(pictureService));
            _stampInfoService = SystemObjects.RequireNotNull(stampInfoService, nameof(stampInfoService));
            _processImageService = SystemObjects.RequireNotNull(processImageService, nameof(processImageService));
        }

        #region Pictures
        [HttpPost("~/api/stamp-picture-all")]
        [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
        [SwaggerOperation(
            summary: "Get all pictures.",
            description: "Get all pictures paged."
        )]
        [SwaggerResponse(200, "Ok", typeof(PicturesResponseModel))]
        public async Task<IActionResult> GetPagedPictures(PageModel page)
        {
            var result = await _pictureService.AllPicturesPagedAsync(page);

            return CreateResponse(result);
        }

        [HttpPost("~/api/stamp-picture/filtered")]
        [AllowAnonymous]
        [SwaggerOperation(
            summary: "Get filtered pictures.",
            description: "Get filtered pictures."
        )]
        [SwaggerResponse(200, "Ok", typeof(PicturesResponseModel))]
        public async Task<IActionResult> GetFilteredPictures(GetFilteredPicturesModel model)
        {
            var result = await _pictureService.FilteredPicturesAsync(model);

            return CreateResponse(result);
        }

        [HttpPost("~/api/stamp-picture")]
        [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
        [SwaggerOperation(
        summary: "Create pictures.",
        description: "Create pictures for Admin."
       )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreatePictures(CreatePicturesModel model)
        {
            Result<string>? result = default;
            if (model.Data.HasAny())
            {
                foreach (var item in model.Data)
                {
                    var curItem = await _processImageService.ResizeAndAddWatermark(item);

                    result = await _pictureService.AddPicturesAsync(model);

                    if(result.StatusCode > 201)
                    {
                        return CreateResponse(result);
                    }
                }
            }

            return CreateResponse(result);
        }

        [HttpPut("~/api/stamp-picture")]
        [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
        [SwaggerOperation(
         summary: "Update pictures.",
         description: "Update pictures for Admin."
        )]
        [SwaggerResponse(200, "Ok")]
        public async Task<IActionResult> UpdatePictures(UpdatePicturesModel model)
        {
            var result = await _pictureService.UpdatePicturesAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/stamp-picture")]
        [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
        [SwaggerOperation(
         summary: "Delete pictures.",
         description: "Delete pictures for Admin."
        )]
        [SwaggerResponse(200, "Ok")]
        public async Task<IActionResult> DeletePictures(DeletePicturesModel model)
        {
            var result = await _pictureService.DeletePicturesAsync(model);

            return CreateResponse(result);
        }
        #endregion Pictures

        #region StampInfo
        [HttpPost("~/api/stamp-info")]
        [AllowAnonymous]
        [SwaggerOperation(
           summary: "Get  all stampinfos.",
           description: "Get all stampinfos paged."
       )]
        [SwaggerResponse(200, "Ok", typeof(StampInfosResponseModel))]
        public async Task<IActionResult> GetStampInfos(PageModel page)
        {
            var result = await _stampInfoService.AllStampInfosAsync(page);

            return CreateResponse(result);
        }

        [HttpPut("~/api/stamp-info")]
        [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
        [SwaggerOperation(
         summary: "Update stampinfos.",
         description: "Update stampinfos for Admin."
        )]
        [SwaggerResponse(200, "Ok")]
        public async Task<IActionResult> UpdateStampInfos(UpdateStampInfosModel model)
        {
            var result = await _stampInfoService.UpdateStampInfosAsync(model);

            return CreateResponse(result);
        }
        #endregion StampInfo
    }
}
