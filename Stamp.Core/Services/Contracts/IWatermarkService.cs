using Domain.Core;

using Stamp.Core.Models.Watermarks;

namespace Stamp.Core.Services.Contracts
{
    public interface IWatermarkService
    {
        Task<Result<WatermarksResponseModel>> AllWatermarksAsync();
        Task<Result<string>> UpdateWatermarksAsync(UpdateWatermarksModel model);
        Task<Result<string>> AddWatermarksAsync(CreateWatermarksModel model);
        Task<Result<string>> DeleteWatermarksAsync(DeleteWatermarksModel model);
    }
}
