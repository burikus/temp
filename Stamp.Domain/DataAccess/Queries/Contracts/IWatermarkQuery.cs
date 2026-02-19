using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IWatermarkQuery
    {
        Task<WatermarkProjection[]> AllWatermarksAsync();
        Task<WatermarkProjection[]> WatermarksFilteredAsync(WatermarkFilter filter);
    }
}
