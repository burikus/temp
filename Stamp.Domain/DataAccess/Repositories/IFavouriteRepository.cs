using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IFavouriteRepository
    {
        Task CreateRangeAsync(Favourite[] favourites);
        Task DeleteRangeAsync(Favourite[] favourites);
        Task<Favourite[]> GetByUserIdsAsync(Guid[]? userIds);
        Task<Favourite[]> GetByStampIdsAsync(Guid[]? stampIds);
        Task<Favourite[]> GetUserStampIdsAsync(Guid userId, Guid[] stampIds);
    }
}
