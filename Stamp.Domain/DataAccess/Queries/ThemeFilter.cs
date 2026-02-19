using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record ThemeFilter(Guid[]? Ids = null, Guid?[]? SubThemeIds = null, ThemeCode[]? Codes = null);
}