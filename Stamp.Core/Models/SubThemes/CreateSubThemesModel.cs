using Domain.Enums;

namespace Stamp.Core.Models.SubThemes
{
    public record CreateSubThemesModel(CreateSubThemeModel[] Data);

    public record CreateSubThemeModel(SubThemeCode Code, string Description);
}
