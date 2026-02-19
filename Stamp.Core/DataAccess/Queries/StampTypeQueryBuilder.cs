using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class StampTypeQueryBuilder
    {
        private IQueryable<StampType> _queryable;

        public static StampTypeQueryBuilder From(StampContext _context)
        {
            var queryable = _context.StampType.AsQueryable().AsNoTracking();

            return new StampTypeQueryBuilder(queryable);
        }

        private StampTypeQueryBuilder(IQueryable<StampType> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<StampType> Build()
        {
            return _queryable;
        }

        public StampTypeQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public StampTypeQueryBuilder ByCodes(StampCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.StampCode));

            return this;
        }

        public StampTypeQueryBuilder BySize(int? horizontal, int? vertical)
        {
            if (horizontal.HasValue && vertical.HasValue)
                _queryable = _queryable.Where(x => x.Horizontal == horizontal && x.Vertical == vertical);

            return this;
        }
    }
}
