using Blog.Core.Models.Menues;

using Domain.Core;

namespace Blog.Core.Services.Contracts
{
    public interface IMenuService
    {
        Task<Result<MenuResponseModel>> AllMenuesAsync(bool isAdmin);
        Task<Result<string>> UpdateMenuesAsync(MenuUpdateModel model);
    }
}
