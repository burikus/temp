using Domain.Core;

using Stamp.Core.Models.Catalogs;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class CatalogsGetConverter : IConverter<CatalogsResponseModel, CatalogProjection[]>
    {
        private readonly IConverter<CatalogResponseModel, CatalogProjection> _catalogConverter;

        public CatalogsGetConverter()
        {
            _catalogConverter = new CatalogGetConverter();
        }

        public CatalogsResponseModel From(CatalogProjection[] src)
        {
            return new CatalogsResponseModel(_catalogConverter.From(src), src.Count()); ;
        }

        public class CatalogGetConverter : IConverter<CatalogResponseModel, CatalogProjection>
        {
            public CatalogResponseModel From(CatalogProjection src)
            {
                return new CatalogResponseModel(src.Id, src.Code, src.Description);
            }
        }
    }
}
