using Blog.Core.Models.Infos;

using Domain.Core;

namespace Blog.Core.Services.Contracts
{
    public interface IInfoService
    {
        Task<Result<InfosResponseModel>> InfoByFilterAsync(bool isAdmin, InfosGetModel args);
        Task<Result<string>> UpdateInfoAsync(InfosUpdateModel model);
        Task<Result<string>> AddInfosAsync(InfosCreateModel model);
        Task<Result<string>> DeleteInfoAsync(InfosDeleteModel model);
    }
}
