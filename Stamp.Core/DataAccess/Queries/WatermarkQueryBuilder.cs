using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class WatermarkQueryBuilder
    {
        private IQueryable<Watermark> _queryable;

        public static WatermarkQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Watermark.AsQueryable().AsNoTracking();

            return new WatermarkQueryBuilder(queryable);
        }

        private WatermarkQueryBuilder(IQueryable<Watermark> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Watermark> Build()
        {
            return _queryable;
        }

        public WatermarkQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public WatermarkQueryBuilder ByCodes(WatermarkCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }
    }
}
