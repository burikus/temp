namespace Stamp.Domain.DataAccess.Queries
{
    public record StampCatalogFilter(Guid[]? Ids = null, string[]? CatalogNumbers = null, Guid[]? CatalogIds = null);
}
