using Domain.Core;

using Stamp.Core.Models.Menues;

namespace Stamp.Core.Services.Contracts
{
    public interface IMenuService
    {
        Task<Result<MenuResponseModel>> AllMenuesAsync(bool isAdmin);
        Task<Result<string>> UpdateMenuesAsync(UpdateMenuModel model);
    }
}
