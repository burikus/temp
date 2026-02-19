using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.SubThemes;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class SubThemeController : WebApiControllerBase
    {
        private readonly ISubThemeService _subThemeService;

        public SubThemeController(ISubThemeService subThemeService) : base()
        {
            _subThemeService = SystemObjects.RequireNotNull(subThemeService, nameof(subThemeService));
        }

        #region SubTheme
        [HttpGet("~/api/setting/subtheme")]
        [SwaggerOperation(
         summary: "Get subthemes.",
         description: "Get subthemes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(SubThemesResponseModel[]))]
        public async Task<IActionResult> GetvSubThemes()
        {
            var result = await _subThemeService.AllSubThemesAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/subtheme")]
        [SwaggerOperation(
         summary: "Create subthemes.",
         description: "Create subthemes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreateSubThemes(CreateSubThemesModel model)
        {
            var result = await _subThemeService.AddSubThemesAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/subtheme")]
        [SwaggerOperation(
         summary: "Update subthemes.",
         description: "Update subthemes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateSubThemes(UpdateSubThemesModel model)
        {
            var result = await _subThemeService.UpdateSubThemesAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/subtheme")]
        [SwaggerOperation(
         summary: "Delete subthemes.",
         description: "Delete subthemes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeleteSubThemes(DeleteSubThemesModel model)
        {
            var result = await _subThemeService.DeleteSubThemesAsync(model);

            return CreateResponse(result);
        }
        #endregion SubTheme
    }
}
