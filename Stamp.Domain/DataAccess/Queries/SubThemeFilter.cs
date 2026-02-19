using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record SubThemeFilter(Guid[]? Ids = null, SubThemeCode[]? Codes = null);
}