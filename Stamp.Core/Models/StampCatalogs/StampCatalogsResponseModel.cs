using Stamp.Core.Models.Catalogs;

namespace Stamp.Core.Models.StampCatalogs
{
    public record StampCatalogsResponseModel(StampCatalogResponseModel[] Data, int TotalCount);

    public record StampCatalogResponseModel(Guid Id, string CatalogNumber, Guid CatalogId, CatalogResponseModel Catalog);
}
