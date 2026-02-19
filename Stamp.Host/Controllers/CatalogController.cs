using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Catalogs;
using Stamp.Core.Models.PictureSettings;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class CatalogController : WebApiControllerBase
    {
        private readonly ICatalogService _catalogService;

        public CatalogController(ICatalogService catalogService) : base()
        {
            _catalogService = SystemObjects.RequireNotNull(catalogService, nameof(catalogService));
        }

        #region Catalog
        [HttpGet("~/api/setting/catalog")]
        [SwaggerOperation(
            summary: "Get catalogs.",
            description: "Get catalogs for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(PictureSettingResponseModel))]
        public async Task<IActionResult> GetCatalogs()
        {
            var result = await _catalogService.AllCatalogsAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/catalog")]
        [SwaggerOperation(
            summary: "Create catalogs.",
            description: "Create catalogs for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreateCatalogs(CreateCatalogsModel model)
        {
            var result = await _catalogService.AddCatalogsAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/catalog")]
        [SwaggerOperation(
            summary: "Update catalogs.",
            description: "Update catalogs for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateCatalogs(UpdateCatalogsModel model)
        {
            var result = await _catalogService.UpdateCatalogsAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/catalog")]
        [SwaggerOperation(
            summary: "Delete catalogs.",
            description: "Delete catalogs for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeleteMessages(DeleteCatalogsModel model)
        {
            var result = await _catalogService.DeleteCatalogsAsync(model);

            return CreateResponse(result);
        }
        #endregion Catalog
    }
}
