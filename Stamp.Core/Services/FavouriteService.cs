using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Favourites;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class FavouriteService : IFavouriteService
    {
        private readonly IFavouriteQuery _favouriteQuery;
        private readonly IFavouriteRepository _favouriteRepository;

        public FavouriteService(IFavouriteQuery favouriteQuery, IFavouriteRepository favouriteRepository)
        {
            _favouriteQuery = SystemObjects.RequireNotNull(favouriteQuery, nameof(favouriteQuery));
            _favouriteRepository = SystemObjects.RequireNotNull(favouriteRepository, nameof(favouriteRepository));
        }

        public async Task<Result<FavouritesResponseModel>> AllFavouritesAsync()
        {
            var result = await _favouriteQuery.AllFavouritesAsync();

            return Result<FavouritesResponseModel>.Ok(new FavouritesGetConverter().From(result));
        }

        public async Task<Result<FavouritesResponseModel>> FavouritesByUserIdAsync(Guid userId)
        {
            var result = await _favouriteQuery.GetByUserIdAsync(userId);

            return Result<FavouritesResponseModel>.Ok(new FavouritesGetConverter().From(result));
        }

        public async Task<Result<string>> AddFavouritesAsync(CreateFavouritesModel model)
        {
            var favourites = await _favouriteQuery.GetUserStampIdsAsync(model.UserId, model.StampIds);
            if (favourites.HasAny())
                return Result<string>.BadRequest("Избранное уже существует.");

            var newFavourites = model.StampIds.Select(x =>
                new Favourite
                {
                    UserId = model.UserId,
                    StampId = x
                })
                .ToArray();

            await _favouriteRepository.CreateRangeAsync(newFavourites);

            return Result<string>.Ok("Избранное добавлено.");
        }

        public async Task<Result<string>> DeleteFavouritesAsync(DeleteFavouritesModel model)
        {
            var favourites = await _favouriteRepository.GetUserStampIdsAsync(model.UserId, model.StampIds);
            if (!favourites.HasAny())
                return Result<string>.BadRequest("Избранное не существует.");

            await _favouriteRepository.DeleteRangeAsync(favourites);

            return Result<string>.Ok("Избранное удалено.");
        }
    }
}
