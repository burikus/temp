using Blog.Core.Models.Infos;

using Domain.Core;

namespace Blog.Core.Services.Contracts
{
    public interface ISwipperService
    {
        Task<Result<SwippersResponseModel>> AllSwippersAsync(bool isAdmin);
        Task<Result<string>> UpdateSwippersAsync(SwippersUpdateModel model);
        Task<Result<string>> AddSwippersAsync(SwippersCreateModel model);
        Task<Result<string>> DeleteSwippersAsync(SwippersDeleteModel model);
    }
}
