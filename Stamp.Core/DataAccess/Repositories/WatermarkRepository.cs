using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class WatermarkRepository : IWatermarkRepository
    {
        private readonly DbSet<Watermark> _watermarks;
        private readonly IUnitOfWork _unitOfWork;

        public WatermarkRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _watermarks = context.Watermark;
        }

        public async Task CreateRangeAsync(Watermark[] watermarks)
        {
            await _watermarks.AddRangeAsync(watermarks);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Watermark[] watermarks)
        {
            _watermarks.UpdateRange(watermarks);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Watermark[] watermarks)
        {
            _watermarks.RemoveRange(watermarks);
            await _unitOfWork.Commit();
        }

        public async Task<Watermark[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _watermarks.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<Watermark>();
        }

        public async Task<Watermark[]> GetByCodesAsync(WatermarkCode[]? codes)
        {
            return codes.HasAny()
                ? await _watermarks.Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<Watermark>();
        }
    }
}
