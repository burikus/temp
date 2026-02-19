namespace Stamp.Core.Models.StampCatalogs
{
    public record CreateStampCatalogsModel(CreateStampCatalogModel[] Data);

    public record CreateStampCatalogModel(string CatalogNumber, Guid CatalogId);
}