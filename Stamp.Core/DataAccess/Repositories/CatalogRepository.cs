using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class CatalogRepository : ICatalogRepository
    {
        private readonly DbSet<Catalog> _catalogs;
        private readonly IUnitOfWork _unitOfWork;

        public CatalogRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _catalogs = context.Catalog;
        }

        public async Task CreateRangeAsync(Catalog[] catalogs)
        {
            await _catalogs.AddRangeAsync(catalogs);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Catalog[] catalogs)
        {
            _catalogs.UpdateRange(catalogs);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Catalog[] catalogs)
        {
            _catalogs.RemoveRange(catalogs);
            await _unitOfWork.Commit();
        }

        public async Task<Catalog[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _catalogs.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<Catalog>();
        }

        public async Task<Catalog[]> GetByCodesAsync(CatalogCode[]? codes)
        {
            return codes.HasAny()
                ? await _catalogs.Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<Catalog>();
        }
    }
}
