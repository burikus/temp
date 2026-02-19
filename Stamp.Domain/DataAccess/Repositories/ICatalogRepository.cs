using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface ICatalogRepository
    {
        Task CreateRangeAsync(Catalog[] catalogs);
        Task UpdateRangeAsync(Catalog[] catalogs);
        Task DeleteRangeAsync(Catalog[] catalogs);
        Task<Catalog[]> GetByIdsAsync(Guid[]? ids);
        Task<Catalog[]> GetByCodesAsync(CatalogCode[]? codes);
    }
}
