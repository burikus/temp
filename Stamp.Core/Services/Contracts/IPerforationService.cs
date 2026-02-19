using Domain.Core;

using Stamp.Core.Models.Perforations;

namespace Stamp.Core.Services.Contracts
{
    public interface IPerforationService
    {
        Task<Result<PerforationsResponseModel>> AllPerforationsAsync();
        Task<Result<string>> UpdatePerforationsAsync(UpdatePerforationsModel model);
        Task<Result<string>> AddPerforationsAsync(CreatePerforationsModel model);
        Task<Result<string>> DeletePerforationsAsync(DeletePerforationsModel model);
    }
}
