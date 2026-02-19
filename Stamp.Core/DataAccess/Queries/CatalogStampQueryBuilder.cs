using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class CatalogStampQueryBuilder
    {
        private IQueryable<StampCatalog> _queryable;

        public static CatalogStampQueryBuilder From(StampContext _context)
        {
            var queryable = _context.CatalogStamp.AsQueryable().AsNoTracking();

            return new CatalogStampQueryBuilder(queryable);
        }

        private CatalogStampQueryBuilder(IQueryable<StampCatalog> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<StampCatalog> Build()
        {
            return _queryable;
        }

        public CatalogStampQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public CatalogStampQueryBuilder ByCatalogIds(Guid[]? catalogIds)
        {
            if (catalogIds.HasAny())
                _queryable = _queryable.Where(x => catalogIds!.Distinct().Contains(x.CatalogId));

            return this;
        }

        public CatalogStampQueryBuilder ByCatalogNumbers(string[]? catalogNumbers)
        {
            if (catalogNumbers.HasAny())
                _queryable = _queryable.Where(x => catalogNumbers.DistinctString()!.Contains(x.CatalogNumber));

            return this;
        }
    }
}
