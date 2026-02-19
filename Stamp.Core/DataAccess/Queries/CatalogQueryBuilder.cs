using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class CatalogQueryBuilder
    {
        private IQueryable<Catalog> _queryable;

        public static CatalogQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Catalog.AsQueryable().AsNoTracking();

            return new CatalogQueryBuilder(queryable);
        }

        private CatalogQueryBuilder(IQueryable<Catalog> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Catalog> Build()
        {
            return _queryable;
        }

        public CatalogQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public CatalogQueryBuilder ByCodes(CatalogCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }
    }
}
