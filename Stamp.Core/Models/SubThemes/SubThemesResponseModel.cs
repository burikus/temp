using Domain.Enums;

namespace Stamp.Core.Models.SubThemes
{
    public record SubThemesResponseModel(SubThemeResponseModel[] Data, int TotalCount);

    public record SubThemeResponseModel(Guid Id, SubThemeCode Code, string Description);
}
