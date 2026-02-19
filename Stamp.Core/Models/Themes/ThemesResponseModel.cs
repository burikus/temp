using Domain.Enums;

using Stamp.Core.Models.SubThemes;

namespace Stamp.Core.Models.Themes
{
    public record ThemesResponseModel(ThemeResponseModel[] Data, int TotalCount);

    public record ThemeResponseModel(Guid Id, ThemeCode Code, string Description, SubThemeResponseModel? SubTheme);
}
