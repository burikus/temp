using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IStampSeriesRepository
    {
        Task CreateRangeAsync(StampSeries[] stampSeries);
        Task UpdateRangeAsync(StampSeries[] stampSeries);
        Task DeleteRangeAsync(StampSeries[] stampSeries);
        Task<StampSeries[]> GetByIdsAsync(Guid[]? ids);
        Task<StampSeries[]> GetByDateAsync(DateTime? dateFrom, DateTime? dateTo);
    }
}
