using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class StampCatalogQuery : IStampCatalogQuery
    {
        private readonly IQueryable<StampCatalog> _catalogs;
        private readonly StampContext _stampsContext;

        public StampCatalogQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _catalogs = stampsContext.CatalogStamp.AsNoTracking();
        }

        public Task<StampCatalogProjection[]> AllStampCatalogsAsync()
        {
            return _catalogs
                .Include(x => x.Catalog)
                .Select(x =>
                    new StampCatalogProjection(x.Id, x.CatalogNumber, x.CatalogId, new CatalogProjection(x.Catalog.Id, x.Catalog.Code, x.Catalog.Description)))
                .ToArrayAsync();
        }

        public Task<StampCatalogProjection[]> StampCatalogsFilteredAsync(StampCatalogFilter filter)
        {
            return CatalogStampQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCatalogIds(filter.CatalogIds)
                .ByCatalogNumbers(filter.CatalogNumbers)
                .Build()
                .Include(x => x.Catalog)
                .Select(x =>
                    new StampCatalogProjection
                    (
                        x.Id,
                        x.CatalogNumber,
                        x.CatalogId,
                        new CatalogProjection(x.Catalog.Id, x.Catalog.Code, x.Catalog.Description)
                    ))
                .ToArrayAsync();
        }
    }
}
