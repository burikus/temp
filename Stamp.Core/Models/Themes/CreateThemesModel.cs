using Domain.Enums;

namespace Stamp.Core.Models.Themes
{
    public record CreateThemesModel(CreateThemeModel[] Data);

    public record CreateThemeModel(ThemeCode Code, string Description, Guid? SubThemeId = null);
}
