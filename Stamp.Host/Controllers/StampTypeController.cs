using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.StampTypes;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class StampTypeController : WebApiControllerBase
    {
        private readonly IStampTypeService _stampTypeService;

        public StampTypeController(IStampTypeService stampTypeService) : base()
        {
            _stampTypeService = SystemObjects.RequireNotNull(stampTypeService, nameof(stampTypeService));
        }

        #region StampType
        [HttpGet("~/api/setting/stamp-type")]
        [SwaggerOperation(
         summary: "Get stamptypes.",
         description: "Get stamptypes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(StampTypesResponseModel[]))]
        public async Task<IActionResult> GetStampTypes()
        {
            var result = await _stampTypeService.AllStampTypesAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/stamp-type")]
        [SwaggerOperation(
         summary: "Create stamptypes.",
         description: "Create stamptypes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreateStampTypes(CreateStampTypesModel model)
        {
            var result = await _stampTypeService.AddStampTypesAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/stamp-type")]
        [SwaggerOperation(
         summary: "Update stamptypes.",
         description: "Update stamptypes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateStampTypes(UpdateStampTypesModel model)
        {
            var result = await _stampTypeService.UpdateStampTypesAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/stamp-type")]
        [SwaggerOperation(
         summary: "Delete stamptypes.",
         description: "Delete stamptypes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeleteStampTypes(DeleteStampTypesModel model)
        {
            var result = await _stampTypeService.DeleteStampTypesAsync(model);

            return CreateResponse(result);
        }
        #endregion StampType
    }
}
