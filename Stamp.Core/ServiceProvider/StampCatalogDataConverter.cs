using Domain.Core;

using Stamp.Core.Models.Catalogs;
using Stamp.Core.Models.StampCatalogs;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class StampCatalogsGetConverter : IConverter<StampCatalogsResponseModel, StampCatalogProjection[]>
    {
        private readonly IConverter<StampCatalogResponseModel, StampCatalogProjection> _stampCatalogConverter;

        public StampCatalogsGetConverter()
        {
            _stampCatalogConverter = new StampCatalogGetConverter();
        }

        public StampCatalogsResponseModel From(StampCatalogProjection[] src)
        {
            return new StampCatalogsResponseModel(_stampCatalogConverter.From(src), src.Count());
        }
        public StampCatalogResponseModel[] FromArray(StampCatalogProjection[] src)
        {
            return _stampCatalogConverter.From(src);
        }


        public class StampCatalogGetConverter : IConverter<StampCatalogResponseModel, StampCatalogProjection>
        {
            public StampCatalogResponseModel From(StampCatalogProjection src)
            {
                return new StampCatalogResponseModel(src.Id, src.CatalogNumber, src.CatalogId, new CatalogResponseModel(src.Catalog.Id, src.Catalog.Code, src.Catalog.Description));
            }
        }
    }
}
