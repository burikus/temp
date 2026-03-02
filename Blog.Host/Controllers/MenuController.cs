using Blog.Core.Models.Menues;
using Blog.Core.Services.Contracts;

using Domain.Constants;
using Domain.Interfaces;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Swashbuckle.AspNetCore.Annotations;

namespace Blog.Host.Controllers
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
        [HttpGet("~/api/setting/menu")]
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

        [HttpPut("~/api/setting/menu")]
        [SwaggerOperation(
         summary: "Update menu.",
         description: "Update menu for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> Updatemenu(MenuUpdateModel model)
        {
            var result = await _menuService.UpdateMenuesAsync(model);

            return CreateResponse(result);
        }
    }
}
