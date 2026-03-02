using Blog.Core.Models.Infos;
using Blog.Core.Models.MicroBlogs;
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
    public class BlogController : WebApiControllerBase
    {
        private readonly IMicroBlogService _microblogService;

        public BlogController(IUserProvider userProvider, IMicroBlogService microblogService) : base(userProvider)
        {
            _microblogService = SystemObjects.RequireNotNull(microblogService, nameof(microblogService));
        }

        [AllowAnonymous]
        [HttpGet("~/api/blog")]
        [SwaggerOperation(
          summary: "Get blogs.",
          description: "Get blogs."
       )]
        [SwaggerResponse(200, "OK", typeof(MicroBlogsResponseModel))]
        public async Task<IActionResult> GetBlogs(MicroBlogsGetModel args)
        {
            var result = await _microblogService.MicroBlogByFilterAsync(UserProvider.IsAdmin(), args);

            return CreateResponse(result);
        }

        [HttpPost("~/api/blog")]
        [SwaggerOperation(
           summary: "Add blogs.",
           description: "Add blogs for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string), "application/json")]
        public async Task<IActionResult> AddInfos([FromBody] MicroBlogsCreateModel model)
        {
            var result = await _microblogService.AddMicroBlogsAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/blog")]
        [SwaggerOperation(
           summary: "Update blogs.",
           description: "Update blogs  for admin."
        )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> UpdateInfos([FromBody] MicroBlogsUpdateModel model)
        {
            var result = await _microblogService.UpdateMicroBlogsAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/blog")]
        [SwaggerOperation(
          summary: "Delete blogs",
          description: "Delete blogs for admin."
       )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> DeleteInfos([FromBody] MicroBlogsDeleteModel model)
        {
            var result = await _microblogService.DeleteMicroBlogsAsync(model);

            return CreateResponse(result);
        }
    }
}
