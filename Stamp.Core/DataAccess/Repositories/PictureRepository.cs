using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class PictureRepository : IPictureRepository
    {
        private readonly DbSet<Picture> _pictures;
        private readonly IUnitOfWork _unitOfWork;

        public PictureRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _pictures = context.Picture;
        }

        public async Task CreateRangeAsync(Picture[] rasters)
        {
            await _pictures.AddRangeAsync(rasters);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Picture[] rasters)
        {
            _pictures.UpdateRange(rasters);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Picture[] rasters)
        {
            _pictures.RemoveRange(rasters);
            await _unitOfWork.Commit();
        }

        public async Task<Picture[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _pictures
                    .Include(x => x.Country)
                    .Include(x => x.StampType)
                    .Include(x => x.StampCatalogs).ThenInclude(x => x.Catalog)
                    .Include(x => x.StampInfo).ThenInclude(x => new { x.Paper, x.Perforation, x.PrintType, x.Raster, x.StampSeries, x.Theme, x.Theme.SubTheme, x.Watermark })
                    .Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<Picture>();
        }

        public async Task<Picture[]> GetByNamesAsync(string[]? names)
        {
            return names.HasAny()
                ? await _pictures
                    .Include(x => x.Country)
                    .Include(x => x.StampType)
                    .Include(x => x.StampCatalogs).ThenInclude(x => x.Catalog)
                    .Include(x => x.StampInfo).ThenInclude(x => new { x.Paper, x.Perforation, x.PrintType, x.Raster, x.StampSeries, x.Theme, x.Watermark })
                    .Where(x => names.DistinctString()!.Contains(x.Name)).ToArrayAsync()
                : Array.Empty<Picture>();
        }

        public async Task<Picture[]> GetByStampTypeIdsAsync(Guid[]? stampTypeIds)
        {
            return stampTypeIds.HasAny()
                ? await _pictures
                    .Include(x => x.Country)
                    .Include(x => x.StampType)
                    .Include(x => x.StampCatalogs).ThenInclude(x => x.Catalog)
                    .Include(x => x.StampInfo).ThenInclude(x => new { x.Paper, x.Perforation, x.PrintType, x.Raster, x.StampSeries, x.Theme, x.Watermark })
                    .Where(x => stampTypeIds!.Distinct().Contains(x.StampTypeId)).ToArrayAsync()
                : Array.Empty<Picture>();
        }

        public async Task<Picture[]> GetByCountryIdsAsync(Guid[]? countryIds)
        {
            return countryIds.HasAny()
                ? await _pictures
                    .Include(x => x.Country)
                    .Include(x => x.StampType)
                    .Include(x => x.StampCatalogs).ThenInclude(x => x.Catalog)
                    .Include(x => x.StampInfo).ThenInclude(x => new { x.Paper, x.Perforation, x.PrintType, x.Raster, x.StampSeries, x.Theme, x.Watermark })
                    .Where(x => countryIds!.Distinct().Contains(x.CountryId)).ToArrayAsync()
                : Array.Empty<Picture>();
        }
    }
}