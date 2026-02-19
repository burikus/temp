using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record PerforationFilter(Guid[]? Ids = null, PerforationCode[]? Codes = null);
}
