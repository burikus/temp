using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class StampSeriesQueryBuilder
    {
        private IQueryable<StampSeries> _queryable;

        public static StampSeriesQueryBuilder From(StampContext _context)
        {
            var queryable = _context.StampSeries.AsQueryable().AsNoTracking();

            return new StampSeriesQueryBuilder(queryable);
        }

        private StampSeriesQueryBuilder(IQueryable<StampSeries> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<StampSeries> Build()
        {
            return _queryable;
        }

        public StampSeriesQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public StampSeriesQueryBuilder ByDates(DateTime? dateFrom, DateTime? dateTo)
        {
            if (dateFrom.HasValue && dateTo.HasValue)
                _queryable = _queryable.Where(x => x.Date >= dateFrom.Value.Date && x.Date <= dateTo.Value.Date);
            else if (dateFrom.HasValue)
                _queryable = _queryable.Where(x => x.Date >= dateFrom.Value.Date);
            else if (dateTo.HasValue)
                _queryable = _queryable.Where(x => x.Date <= dateTo.Value.Date);

            return this;
        }
    }
}
