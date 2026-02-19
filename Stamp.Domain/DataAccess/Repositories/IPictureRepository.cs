using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IPictureRepository
    {
        Task CreateRangeAsync(Picture[] rasters);
        Task UpdateRangeAsync(Picture[] rasters);
        Task DeleteRangeAsync(Picture[] rasters);
        Task<Picture[]> GetByIdsAsync(Guid[]? ids);
        Task<Picture[]> GetByNamesAsync(string[]? names);
        Task<Picture[]> GetByStampTypeIdsAsync(Guid[]? stampTypeIds);
        Task<Picture[]> GetByCountryIdsAsync(Guid[]? countryIds);
    }
}
