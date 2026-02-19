using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class RasterRepository : IRasterRepository
    {
        private readonly DbSet<Raster> _rasters;
        private readonly IUnitOfWork _unitOfWork;

        public RasterRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _rasters = context.Raster;
        }

        public async Task CreateRangeAsync(Raster[] rasters)
        {
            await _rasters.AddRangeAsync(rasters);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Raster[] rasters)
        {
            _rasters.UpdateRange(rasters);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Raster[] rasters)
        {
            _rasters.RemoveRange(rasters);
            await _unitOfWork.Commit();
        }

        public async Task<Raster[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _rasters.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<Raster>();
        }

        public async Task<Raster[]> GetByCodesAsync(RasterCode[]? codes)
        {
            return codes.HasAny()
                ? await _rasters.Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<Raster>();
        }
    }
}
