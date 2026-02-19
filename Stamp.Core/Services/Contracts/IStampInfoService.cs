using Domain.Core;

using Stamp.Core.Models;
using Stamp.Core.Models.StampInfos;

namespace Stamp.Core.Services.Contracts
{
    public interface IStampInfoService
    {
        Task<Result<StampInfosResponseModel>> AllStampInfosAsync(PageModel page);
        Task<Result<string>> UpdateStampInfosAsync(UpdateStampInfosModel model);
    }
}
