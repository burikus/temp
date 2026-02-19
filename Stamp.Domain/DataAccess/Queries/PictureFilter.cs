using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record PictureFilter(Guid[]? Ids = null, string[]? Names = null, Guid[]? StampTypeIds = null, Guid[]? CountryIds = null, int[]? IssueYears = null, StampCode[]? StampCodes = null, Guid? SubMenuId = null);
}
