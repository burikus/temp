using Domain.Core;

using Stamp.Core.Models.Catalogs;

namespace Stamp.Core.Services.Contracts
{
    public interface ICatalogService
    {
        Task<Result<CatalogsResponseModel>> AllCatalogsAsync();
        Task<Result<string>> UpdateCatalogsAsync(UpdateCatalogsModel model);
        Task<Result<string>> AddCatalogsAsync(CreateCatalogsModel model);
        Task<Result<string>> DeleteCatalogsAsync(DeleteCatalogsModel model);
    }
}
