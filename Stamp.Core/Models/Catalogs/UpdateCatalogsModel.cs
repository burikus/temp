using Domain.Enums;

namespace Stamp.Core.Models.Catalogs
{
    public record UpdateCatalogsModel(UpdateCatalogModel[] Data);

    public record UpdateCatalogModel(Guid Id, CatalogCode? Code = null, string? Description = null);
}
