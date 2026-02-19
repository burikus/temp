using Domain.Enums;

namespace Stamp.Core.Models.Catalogs
{
    public record CatalogsResponseModel(CatalogResponseModel[] Data, int TotalCount);

    public record CatalogResponseModel(Guid Id, CatalogCode Code, string Description);

}
