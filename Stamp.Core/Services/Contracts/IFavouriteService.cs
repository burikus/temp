using Domain.Core;

using Stamp.Core.Models.Favourites;

namespace Stamp.Core.Services.Contracts
{
    public interface IFavouriteService
    {
        Task<Result<FavouritesResponseModel>> AllFavouritesAsync();
        Task<Result<FavouritesResponseModel>> FavouritesByUserIdAsync(Guid userId);
        Task<Result<string>> AddFavouritesAsync(CreateFavouritesModel model);
        Task<Result<string>> DeleteFavouritesAsync(DeleteFavouritesModel model);
    }
}
