using Domain.Core;

using Stamp.Core.Models.SubThemes;

namespace Stamp.Core.Services.Contracts
{
    public interface ISubThemeService
    {
        Task<Result<SubThemesResponseModel>> AllSubThemesAsync();
        Task<Result<string>> UpdateSubThemesAsync(UpdateSubThemesModel model);
        Task<Result<string>> AddSubThemesAsync(CreateSubThemesModel model);
        Task<Result<string>> DeleteSubThemesAsync(DeleteSubThemesModel model);
    }
}
