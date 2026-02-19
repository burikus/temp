using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.TextFormattings;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class TextFormattingController : WebApiControllerBase
    {
        private readonly ITextFormattingService _textFormattingService;

        public TextFormattingController(ITextFormattingService textFormattingService) : base()
        {
            _textFormattingService = SystemObjects.RequireNotNull(textFormattingService, nameof(textFormattingService));
        }

        [AllowAnonymous]
        [HttpGet("~/api/setting/textformatting")]
        [SwaggerOperation(
         summary: "Get text formattings.",
         description: "Get text formattings for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(TextFormattingsResponseModel))]
        public async Task<IActionResult> GetvThemes()
        {
            var result = await _textFormattingService.AllTextFormattingsAsync();

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/textformatting")]
        [SwaggerOperation(
         summary: "Update text formattings.",
         description: "Update text formattings for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateThemes(UpdateTextFormattingsModel model)
        {
            var result = await _textFormattingService.UpdateTextFormattingsAsync(model);

            return CreateResponse(result);
        }
    }
}
