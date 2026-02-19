using Domain.Enums;

namespace Stamp.Core.Models.Catalogs
{
    public record CreateCatalogsModel(CreateCatalogModel[] Data);

    public record CreateCatalogModel(CatalogCode Code, string Description);
}
