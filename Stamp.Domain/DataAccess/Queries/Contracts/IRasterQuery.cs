using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IRasterQuery
    {
        Task<RasterProjection[]> AllRastersAsync();
        Task<RasterProjection[]> RastersFilteredAsync(RasterFilter filter);
    }
}
