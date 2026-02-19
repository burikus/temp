using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IPictureSettingRepository
    {
        Task CreateRangeAsync(PictureSetting[] pictureSettings);
        Task UpdateRangeAsync(PictureSetting[] pictureSettings);
        Task DeleteRangeAsync(PictureSetting[] pictureSettings);
        Task<PictureSetting[]> GetByIdsAsync(Guid[]? ids);
    }
}
