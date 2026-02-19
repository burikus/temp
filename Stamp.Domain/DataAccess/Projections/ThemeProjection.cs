using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record ThemeProjection(Guid Id, ThemeCode Code, string Description, SubThemeProjection SubTheme);
}