using Domain.Enums;

namespace Stamp.Core.Models.SubThemes
{
    public record UpdateSubThemesModel(UpdateSubThemeModel[] Data);

    public record UpdateSubThemeModel(Guid Id, SubThemeCode? Code = null, string? Description = null);
}
