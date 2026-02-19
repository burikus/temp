using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record StampTypeFilter(Guid[]? Ids = null, StampCode[]? Codes = null, int? Horizontal = null, int? Vertical = null);
}