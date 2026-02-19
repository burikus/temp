using Stamp.Core.Models.StampCatalogs;

namespace Stamp.Core.Services.Contracts
{
    public interface IStampCatalogService
    {
        Task<StampCatalogsResponseModel> AllStampCatalogsAsync();
        Task<bool> UpdateStampCatalogsAsync(UpdateStampCatalogsModel model);
        Task<bool> AddStampCatalogsAsync(CreateStampCatalogsModel model);
        Task<bool> DeleteStampCatalogsAsync(DeleteStampCatalogsModel model);
    }
}
