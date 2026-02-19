using Domain.Core;

using Stamp.Core.Models;
using Stamp.Core.Models.Pictures;

namespace Stamp.Core.Services.Contracts
{
    public interface IPictureService
    {
        Task<Result<PicturesResponseModel>> AllPicturesPagedAsync(PageModel page);
        Task<Result<PicturesResponseModel>> FilteredPicturesAsync(GetFilteredPicturesModel model);
        Task<Result<string>> UpdatePicturesAsync(UpdatePicturesModel model);
        Task<Result<string>> AddPicturesAsync(CreatePicturesModel model);
        Task<Result<string>> DeletePicturesAsync(DeletePicturesModel model);
    }
}
