using Domain.Enums;

namespace Stamp.Core.Models.Themes
{
    public record UpdateThemesModel(UpdateThemeModel[] Data);

    public record UpdateThemeModel(Guid Id, ThemeCode? Code = null, Guid? SubThemeId = null, string? Description = null);
}
