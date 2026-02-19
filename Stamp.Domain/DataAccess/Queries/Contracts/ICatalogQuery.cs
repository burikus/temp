using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface ICatalogQuery
    {
        Task<CatalogProjection[]> AllCatalogsAsync();
        Task<CatalogProjection[]> CatalogsFilteredAsync(CatalogFilter filter);
    }
}
