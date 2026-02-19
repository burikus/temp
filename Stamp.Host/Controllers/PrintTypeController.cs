using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.PrintTypes;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class PrintTypeController : WebApiControllerBase
    {
        private readonly IPrintTypeService _printTypeService;

        public PrintTypeController(IPrintTypeService printTypeService) : base()
        {
            _printTypeService = SystemObjects.RequireNotNull(printTypeService, nameof(printTypeService));
        }

        #region PrintType
        [HttpGet("~/api/setting/print-type")]
        [SwaggerOperation(
         summary: "Get printtypes.",
         description: "Get printtypes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(PrintTypesResponseModel[]))]
        public async Task<IActionResult> GetPrintTypes()
        {
            var result = await _printTypeService.AllPrintTypesAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/print-type")]
        [SwaggerOperation(
         summary: "Create printtypes.",
         description: "Create printtypes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreatePrintTypes(CreatePrintTypesModel model)
        {
            var result = await _printTypeService.AddPrintTypesAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/print-type")]
        [SwaggerOperation(
         summary: "Update printtypes.",
         description: "Update printtypes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdatePrintTypes(UpdatePrintTypesModel model)
        {
            var result = await _printTypeService.UpdatePrintTypesAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/print-type")]
        [SwaggerOperation(
         summary: "Delete printtypes.",
         description: "Delete printtypes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeletePrintTypes(DeletePrintTypesModel model)
        {
            var result = await _printTypeService.DeletePrintTypesAsync(model);

            return CreateResponse(result);
        }
        #endregion PrintType
    }
}
