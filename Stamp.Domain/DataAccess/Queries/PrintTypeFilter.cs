using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record PrintTypeFilter(Guid[]? Ids = null, PrintTypeCode[]? Codes = null);
}
