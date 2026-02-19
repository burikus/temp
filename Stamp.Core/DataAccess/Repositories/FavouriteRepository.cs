using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class FavouriteRepository : IFavouriteRepository
    {
        private readonly DbSet<Favourite> _favourites;
        private readonly IUnitOfWork _unitOfWork;

        public FavouriteRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _favourites = context.Favourite;
        }

        public async Task CreateRangeAsync(Favourite[] favourites)
        {
            await _favourites.AddRangeAsync(favourites);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Favourite[] favourites)
        {
            _favourites.RemoveRange(favourites);
            await _unitOfWork.Commit();
        }

        public async Task<Favourite[]> GetByUserIdsAsync(Guid[]? userIds)
        {
            return userIds.HasAny()
                ? await _favourites.Where(x => userIds!.Distinct().Contains(x.UserId)).ToArrayAsync()
                : Array.Empty<Favourite>();
        }

        public async Task<Favourite[]> GetByStampIdsAsync(Guid[]? stampIds)
        {
            return stampIds.HasAny()
                ? await _favourites.Where(x => stampIds!.Distinct().Contains(x.StampId)).ToArrayAsync()
                : Array.Empty<Favourite>();
        }

        public Task<Favourite[]> GetUserStampIdsAsync(Guid userId, Guid[] stampIds)
        {
            return _favourites.Where(x => x.UserId == userId && stampIds.Distinct().Contains(x.StampId)).ToArrayAsync();
        }
    }
}
