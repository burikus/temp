using Domain.Constants;
using Domain.Interfaces;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Menues;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class MenuController : WebApiControllerBase
    {
        private readonly IMenuService _menuService;

        public MenuController(
            IUserProvider userProvider,
            IMenuService menuService) : base(userProvider)
        {
            _menuService = SystemObjects.RequireNotNull(menuService, nameof(menuService));
        }

        [AllowAnonymous]
        [HttpGet("~/api/menu")]
        [SwaggerOperation(
         summary: "Get menu.",
         description: "Get menu."
        )]
        [SwaggerResponse(200, "Ok", typeof(MenuResponseModel))]
        public async Task<IActionResult> GetMenu()
        {
            var result = await _menuService.AllMenuesAsync(UserProvider.IsAdmin());

            return CreateResponse(result);
        }

        [HttpPut("~/api/menu")]
        [SwaggerOperation(
         summary: "Update menu.",
         description: "Update menu for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> Updatemenu(UpdateMenuModel model)
        {
            var result = await _menuService.UpdateMenuesAsync(model);

            return CreateResponse(result);
        }
    }
}
