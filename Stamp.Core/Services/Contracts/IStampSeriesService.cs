using Domain.Core;

using Stamp.Core.Models.StampSeries;

namespace Stamp.Core.Services.Contracts
{
    public interface IStampSeriesService
    {
        Task<Result<StampSeriesesResponseModel>> AllStampSeriesesAsync();
        Task<Result<string>> UpdateStampSeriesesAsync(UpdateStampSeriesesModel model);
        Task<Result<string>> AddStampSeriesesAsync(CreateStampSeriesesModel model);
        Task<Result<string>> DeleteStampSeriesesAsync(DeleteStampSeriesesModel model);
    }
}
