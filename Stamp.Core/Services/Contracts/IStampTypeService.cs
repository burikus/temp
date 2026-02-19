using Domain.Core;

using Stamp.Core.Models.StampTypes;

namespace Stamp.Core.Services.Contracts
{
    public interface IStampTypeService
    {
        Task<Result<StampTypesResponseModel>> AllStampTypesAsync();
        Task<Result<string>> UpdateStampTypesAsync(UpdateStampTypesModel model);
        Task<Result<string>> AddStampTypesAsync(CreateStampTypesModel model);
        Task<Result<string>> DeleteStampTypesAsync(DeleteStampTypesModel model);
    }
}
