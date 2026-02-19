using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IPaperQuery
    {
        Task<PaperProjection[]> AllPapersAsync();
        Task<PaperProjection[]> PapersFilteredAsync(PaperFilter filter);
    }
}
