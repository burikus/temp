namespace Stamp.Core.Models.StampCatalogs
{
    public record UpdateStampCatalogsModel(UpdateStampCatalogModel[] Data);

    public record UpdateStampCatalogModel(Guid Id, string CatalogNumber, Guid CatalogId);
}
