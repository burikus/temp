using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Papers;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class PaperController : WebApiControllerBase
    {
        private readonly IPaperService _paperService;

        public PaperController(IPaperService paperService) : base()
        {
            _paperService = SystemObjects.RequireNotNull(paperService, nameof(paperService));
        }

        #region Paper
        [HttpGet("~/api/setting/paper")]
        [SwaggerOperation(
           summary: "Get papers.",
           description: "Get papers for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(PapersResponseModel))]
        public async Task<IActionResult> GetPapers()
        {
            var result = await _paperService.AllPapersAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/paper")]
        [SwaggerOperation(
           summary: "Create papers.",
           description: "Create papers for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreatePapers(CreatePapersModel model)
        {
            var result = await _paperService.AddPapersAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/paper")]
        [SwaggerOperation(
           summary: "Update papers.",
           description: "Update papers for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdatePapers(UpdatePapersModel model)
        {
            var result = await _paperService.UpdatePapersAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/paper")]
        [SwaggerOperation(
           summary: "Delete papers.",
           description: "Delete papers for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeletePapers(DeletePapersModel model)
        {
            var result = await _paperService.DeletePapersAsync(model);

            return CreateResponse(result);
        }
        #endregion Country
    }
}
