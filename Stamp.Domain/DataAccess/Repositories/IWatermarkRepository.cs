using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IWatermarkRepository
    {
        Task CreateRangeAsync(Watermark[] watermarks);
        Task UpdateRangeAsync(Watermark[] watermarks);
        Task DeleteRangeAsync(Watermark[] watermarks);
        Task<Watermark[]> GetByIdsAsync(Guid[]? ids);
        Task<Watermark[]> GetByCodesAsync(WatermarkCode[]? codes);
    }
}
