using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record SubThemeProjection(Guid Id, SubThemeCode Code, string Description);
}