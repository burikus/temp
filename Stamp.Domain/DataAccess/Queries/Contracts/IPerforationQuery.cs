using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IPerforationQuery
    {
        Task<PerforationProjection[]> AllPerforationsAsync();
        Task<PerforationProjection[]> PerforationsFilteredAsync(PerforationFilter filter);
    }
}
