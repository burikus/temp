using Domain.Core;

using Stamp.Core.Models.Papers;

namespace Stamp.Core.Services.Contracts
{
    public interface IPaperService
    {
        Task<Result<PapersResponseModel>> AllPapersAsync();
        Task<Result<string>> UpdatePapersAsync(UpdatePapersModel model);
        Task<Result<string>> AddPapersAsync(CreatePapersModel model);
        Task<Result<string>> DeletePapersAsync(DeletePapersModel model);
    }
}
