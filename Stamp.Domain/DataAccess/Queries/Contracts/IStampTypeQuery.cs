using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IStampTypeQuery
    {
        Task<StampTypeProjection[]> AllStampTypesAsync();
        Task<StampTypeProjection[]> StampTypesFilteredAsync(StampTypeFilter filter);
    }
}
