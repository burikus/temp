using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IStampCatalogQuery
    {
        Task<StampCatalogProjection[]> AllStampCatalogsAsync();
        Task<StampCatalogProjection[]> StampCatalogsFilteredAsync(StampCatalogFilter filter);
    }
}
