namespace Stamp.Domain.DataAccess.Projections
{
    public record StampCatalogProjection(Guid Id, string CatalogNumber, Guid CatalogId, CatalogProjection Catalog);
}
