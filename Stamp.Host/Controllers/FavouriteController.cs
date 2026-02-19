using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Favourites;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    public class FavouriteController : WebApiControllerBase
    {
        private readonly IFavouriteService _favouriteService;

        public FavouriteController(IFavouriteService favouriteService) : base()
        {
            _favouriteService = SystemObjects.RequireNotNull(favouriteService, nameof(favouriteService));
        }

        [AllowAnonymous]
        [HttpGet("~/api/favourite")]
        [SwaggerOperation(
          summary: "Get favourites.",
          description: "Get favourites."
       )]
        [SwaggerResponse(200, "OK", typeof(FavouritesResponseModel))]
        public async Task<IActionResult> AllFavourites()
        {
            var result = await _favouriteService.AllFavouritesAsync();

            return CreateResponse(result);
        }

        [AllowAnonymous]
        [HttpGet("~/api/favourite/user")]
        [SwaggerOperation(
          summary: "Get favourites.",
          description: "Get favourites."
       )]
        [SwaggerResponse(200, "OK", typeof(FavouritesResponseModel))]
        public async Task<IActionResult> FavouritesByUser([FromQuery] Guid userId)
        {
            var result = await _favouriteService.FavouritesByUserIdAsync(userId);

            return CreateResponse(result);
        }

        [AllowAnonymous]
        [HttpPost("~/api/favourite")]
        [SwaggerOperation(
           summary: "Add favourites.",
           description: "Add favourites."
        )]
        [SwaggerResponse(200, "OK", typeof(string), "application/json")]
        public async Task<IActionResult> AddFavourites([FromBody] CreateFavouritesModel model)
        {
            var result = await _favouriteService.AddFavouritesAsync(model);

            return CreateResponse(result);
        }

        [AllowAnonymous]
        [HttpDelete("~/api/favourite")]
        [SwaggerOperation(
          summary: "Delete favourites",
          description: "Delete favourites."
       )]
        [SwaggerResponse(200, "OK", typeof(string))]
        public async Task<IActionResult> DeleteBFavourites([FromBody] DeleteFavouritesModel model)
        {
            var result = await _favouriteService.DeleteFavouritesAsync(model);

            return CreateResponse(result);
        }
    }
}
