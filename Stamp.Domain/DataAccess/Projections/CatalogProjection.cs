using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record CatalogProjection(Guid Id, CatalogCode Code, string Description);
}