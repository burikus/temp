using Blog.Core.Models.Infos;
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
    public class InfoController : WebApiControllerBase
    {
        private readonly IInfoService _infoService;

        public InfoController(IUserProvider userProvider, IInfoService infoService) : base(userProvider)
        {
            _infoService = SystemObjects.RequireNotNull(infoService, nameof(infoService));
        }

        [AllowAnonymous]
        [HttpGet("~/api/info")]
        [SwaggerOperation(
          summary: "Get infos.",
          description: "Get infos."
       )]
        [SwaggerResponse(200, "OK", typeof(InfosResponseModel))]
        public async Task<IActionResult> GetInfos(InfosGetModel args)
        {
            var result = await _infoService.InfoByFilterAsync(UserProvider.IsAdmin(), args);

            return CreateResponse(result);
        }

        [HttpPost("~/api/info")]
        [SwaggerOperation(
           summary: "Add infos.",
           description: "Add infos for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string), "application/json")]
        public async Task<IActionResult> AddInfos([FromBody] InfosCreateModel model)
        {
            var result = await _infoService.AddInfosAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/info")]
        [SwaggerOperation(
           summary: "Update infos.",
           description: "Update infos  for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> UpdateInfos([FromBody] InfosUpdateModel model)
        {
            var result = await _infoService.UpdateInfoAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/info")]
        [SwaggerOperation(
          summary: "Delete infos",
          description: "Delete infos for admin."
       )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> DeleteInfos([FromBody] InfosDeleteModel model)
        {
            var result = await _infoService.DeleteInfoAsync(model);

            return CreateResponse(result);
        }
    }
}
