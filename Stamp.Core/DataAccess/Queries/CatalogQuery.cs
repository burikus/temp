using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class CatalogQuery : ICatalogQuery
    {
        private readonly IQueryable<Catalog> _catalogs;
        private readonly StampContext _stampsContext;

        public CatalogQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _catalogs = stampsContext.Catalog.AsNoTracking();
        }

        public Task<CatalogProjection[]> AllCatalogsAsync()
        {
            return _catalogs.Select(x => new CatalogProjection(x.Id, x.Code, x.Description)).ToArrayAsync();
        }

        public Task<CatalogProjection[]> CatalogsFilteredAsync(CatalogFilter filter)
        {
            return CatalogQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .Build()
                .Select(x =>
                    new CatalogProjection
                    (
                        x.Id,
                        x.Code,
                        x.Description
                    ))
                .ToArrayAsync();
        }
    }
}
