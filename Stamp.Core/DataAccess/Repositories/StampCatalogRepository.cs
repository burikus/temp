using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class StampCatalogRepository : IStampCatalogRepository
    {
        private readonly DbSet<StampCatalog> _catalogStamps;
        private readonly IUnitOfWork _unitOfWork;

        public StampCatalogRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _catalogStamps = context.CatalogStamp;
        }

        public async Task CreateRangeAsync(StampCatalog[] catalogStamps)
        {
            await _catalogStamps.AddRangeAsync(catalogStamps);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(StampCatalog[] catalogStamps)
        {
            _catalogStamps.UpdateRange(catalogStamps);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(StampCatalog[] catalogStamps)
        {
            _catalogStamps.RemoveRange(catalogStamps);
            await _unitOfWork.Commit();
        }

        public async Task<StampCatalog[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _catalogStamps.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<StampCatalog>();
        }

        public async Task<StampCatalog[]> GetByCatalogIdsAsync(Guid[]? catalogIds)
        {
            return catalogIds.HasAny()
                ? await _catalogStamps.Where(x => catalogIds!.Distinct().Contains(x.CatalogId)).ToArrayAsync()
                : Array.Empty<StampCatalog>();
        }

        public async Task<StampCatalog[]> GetByCatalogNumbersAsync(string[]? catalogNumbers)
        {
            return catalogNumbers.HasAny()
                ? await _catalogStamps.Where(x => catalogNumbers.DistinctString()!.Contains(x.CatalogNumber)).ToArrayAsync()
                : Array.Empty<StampCatalog>();
        }
    }
}
