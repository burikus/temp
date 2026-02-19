using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class RasterQueryBuilder
    {
        private IQueryable<Raster> _queryable;

        public static RasterQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Raster.AsQueryable().AsNoTracking();

            return new RasterQueryBuilder(queryable);
        }

        private RasterQueryBuilder(IQueryable<Raster> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Raster> Build()
        {
            return _queryable;
        }

        public RasterQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public RasterQueryBuilder ByCodes(RasterCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }
    }
}
