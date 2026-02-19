using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class FavouriteQuery : IFavouriteQuery
    {
        private readonly IQueryable<Favourite> _favourites;
        private readonly StampContext _stampsContext;

        public FavouriteQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _favourites = stampsContext.Favourite.AsNoTracking();
        }

        public Task<FavouriteProjection[]> AllFavouritesAsync()
        {
            return _favourites.Select(x => new FavouriteProjection(x.UserId, x.StampId)).ToArrayAsync();
        }

        public Task<FavouriteProjection[]> GetByUserIdAsync(Guid userId)
        {
            return _favourites
                .Where(x => x.UserId == userId)
                .Select(x =>
                    new FavouriteProjection(x.UserId, x.StampId))
                .ToArrayAsync();
        }

        public Task<FavouriteProjection[]> GetUserStampIdsAsync(Guid userId, Guid[] stampIds)
        {
            return _favourites
                .Where(x => x.UserId == userId && stampIds.Distinct().Contains(x.StampId))
                .Select(x =>
                    new FavouriteProjection(x.UserId, x.StampId))
                .ToArrayAsync();
        }
    }
}
