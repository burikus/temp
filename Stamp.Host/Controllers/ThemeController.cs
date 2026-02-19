using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Themes;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class ThemeController : WebApiControllerBase
    {
        private readonly IThemeService _themeService;

        public ThemeController(IThemeService themeService) : base()
        {
            _themeService = SystemObjects.RequireNotNull(themeService, nameof(themeService));
        }

        #region Theme
        [HttpGet("~/api/setting/theme")]
        [SwaggerOperation(
         summary: "Get themes.",
         description: "Get themes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(ThemesResponseModel[]))]
        public async Task<IActionResult> GetvThemes()
        {
            var result = await _themeService.AllThemesAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/theme")]
        [SwaggerOperation(
         summary: "Create themes.",
         description: "Create themes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreateThemes(CreateThemesModel model)
        {
            var result = await _themeService.AddThemesAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/theme")]
        [SwaggerOperation(
         summary: "Update themes.",
         description: "Update themes for Admin. SubThemeId null - resets setting"
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateThemes(UpdateThemesModel model)
        {
            var result = await _themeService.UpdateThemesAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/theme")]
        [SwaggerOperation(
         summary: "Delete themes.",
         description: "Delete themes for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeleteThemes(DeleteThemesModel model)
        {
            var result = await _themeService.DeleteThemesAsync(model);

            return CreateResponse(result);
        }
        #endregion Theme
    }
}
