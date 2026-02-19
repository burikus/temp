using Domain.Core;

using Stamp.Core.Models.Themes;

namespace Stamp.Core.Services.Contracts
{
    public interface IThemeService
    {
        Task<Result<ThemesResponseModel>> AllThemesAsync();
        Task<Result<string>> UpdateThemesAsync(UpdateThemesModel model);
        Task<Result<string>> AddThemesAsync(CreateThemesModel model);
        Task<Result<string>> DeleteThemesAsync(DeleteThemesModel model);
    }
}
