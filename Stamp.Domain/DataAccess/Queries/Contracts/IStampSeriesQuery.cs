using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IStampSeriesQuery
    {
        Task<StampSeriesProjection[]> AllStampSeriesAsync();
        Task<StampSeriesProjection[]> StampSeriesFilteredAsync(StampSeriesFilter filter);
    }
}
