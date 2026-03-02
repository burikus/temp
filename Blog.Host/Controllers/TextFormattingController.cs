using Blog.Core.Models.Infos;
using Blog.Core.Models.TextFormattings;
using Blog.Core.Services.Contracts;
using Blog.Domain.DataAccess.Queries;

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
    public class TextFormattingController : WebApiControllerBase
    {
        private readonly ITextFormattingService _textFormattingService;

        public TextFormattingController(IUserProvider userProvider, ITextFormattingService textFormattingService) : base(userProvider)
        {
            _textFormattingService = SystemObjects.RequireNotNull(textFormattingService, nameof(textFormattingService));
        }

        [HttpGet("~/api/setting/textformatting-all")]
        [SwaggerOperation(
          summary: "Get textFormatting.",
          description: "Get textFormatting."
       )]
        [SwaggerResponse(200, "OK", typeof(TextFormattingsResponseModel))]
        public async Task<IActionResult> GetTextFormattings()
        {
            var result = await _textFormattingService.AllTextFormattingAsync();

            return CreateResponse(result);
        }

        [AllowAnonymous]
        [HttpGet("~/api/setting/textformatting")]
        [SwaggerOperation(
         summary: "Get textFormatting.",
         description: "Get textFormatting."
      )]
        [SwaggerResponse(200, "OK", typeof(TextFormattingResponseModel))]
        public async Task<IActionResult> GetTextFormattings(TextFormattingGetModel args)
        {
            var result = await _textFormattingService.TextFormattingByFilterAsync(UserProvider.IsAdmin(), args);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/textformatting")]
        [SwaggerOperation(
           summary: "Update textFormattings.",
           description: "Update textFormattings  for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> UpdateInfos([FromBody] TextFormattingsUpdateModel model)
        {
            var result = await _textFormattingService.UpdateTextFormattingAsync(model);

            return CreateResponse(result);
        }
    }
}
