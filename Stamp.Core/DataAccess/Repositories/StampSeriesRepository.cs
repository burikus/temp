using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class StampSeriesRepository : IStampSeriesRepository
    {
        private readonly DbSet<StampSeries> _stampSeries;
        private readonly IUnitOfWork _unitOfWork;

        public StampSeriesRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _stampSeries = context.StampSeries;
        }

        public async Task CreateRangeAsync(StampSeries[] stampSeries)
        {
            await _stampSeries.AddRangeAsync(stampSeries);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(StampSeries[] stampSeries)
        {
            _stampSeries.UpdateRange(stampSeries);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(StampSeries[] stampSeries)
        {
            _stampSeries.RemoveRange(stampSeries);
            await _unitOfWork.Commit();
        }

        public async Task<StampSeries[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _stampSeries.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<StampSeries>();
        }

        public async Task<StampSeries[]> GetByDateAsync(DateTime? dateFrom, DateTime? dateTo)
        {
            if (dateFrom.HasValue && dateTo.HasValue)
                return await _stampSeries.Where(x => x.Date >= dateFrom.Value.Date && x.Date <= dateTo.Value.Date).ToArrayAsync();
            else if (dateFrom.HasValue)
                return await _stampSeries.Where(x => x.Date >= dateFrom.Value.Date).ToArrayAsync();
            else if (dateTo.HasValue)
                return await _stampSeries.Where(x => x.Date <= dateTo.Value.Date).ToArrayAsync();

            return Array.Empty<StampSeries>();
        }
    }
}
