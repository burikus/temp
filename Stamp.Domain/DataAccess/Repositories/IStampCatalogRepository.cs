using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IStampCatalogRepository
    {
        Task CreateRangeAsync(StampCatalog[] catalogStamps);
        Task UpdateRangeAsync(StampCatalog[] catalogStamps);
        Task DeleteRangeAsync(StampCatalog[] catalogStamps);
        Task<StampCatalog[]> GetByIdsAsync(Guid[]? ids);
        Task<StampCatalog[]> GetByCatalogIdsAsync(Guid[]? catalogIds);
        Task<StampCatalog[]> GetByCatalogNumbersAsync(string[]? catalogNumbers);
    }
}
