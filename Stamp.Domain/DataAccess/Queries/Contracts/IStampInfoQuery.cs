using Domain.Dtos;

using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IStampInfoQuery
    {
        Task<StampInfoProjection[]> AllStampInfosAsync(PageDto page);
        Task<StampInfoProjection[]> StampInfosFilteredAsync(StampInfoFilter filter);
    }
}
