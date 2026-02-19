using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IPrintTypeQuery
    {
        Task<PrintTypeProjection[]> AllPrintTypesAsync();
        Task<PrintTypeProjection[]> PrintTypesFilteredAsync(PrintTypeFilter filter);
    }
}
