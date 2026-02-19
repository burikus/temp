using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IRasterRepository
    {
        Task CreateRangeAsync(Raster[] papers);
        Task UpdateRangeAsync(Raster[] papers);
        Task DeleteRangeAsync(Raster[] papers);
        Task<Raster[]> GetByIdsAsync(Guid[]? ids);
        Task<Raster[]> GetByCodesAsync(RasterCode[]? codes);
    }
}
