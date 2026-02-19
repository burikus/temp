using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IFavouriteQuery
    {
        Task<FavouriteProjection[]> AllFavouritesAsync();
        Task<FavouriteProjection[]> GetByUserIdAsync(Guid userId);
        Task<FavouriteProjection[]> GetUserStampIdsAsync(Guid userId, Guid[] stampIds);
    }
}
