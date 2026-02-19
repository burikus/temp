using Domain.Core;

using Stamp.Core.Models.Rasters;

namespace Stamp.Core.Services.Contracts
{
    public interface IRasterService
    {
        Task<Result<RastersResponseModel>> AllRastersAsync();
        Task<Result<string>> UpdateRastersAsync(UpdateRastersModel model);
        Task<Result<string>> AddRastersAsync(CreateRastersModel model);
        Task<Result<string>> DeleteRastersAsync(DeleteRastersModel model);
    }
}
