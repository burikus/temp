using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record CatalogFilter(Guid[]? Ids = null, CatalogCode[]? Codes = null);
}
