using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class StampSeriesQuery : IStampSeriesQuery
    {
        private readonly IQueryable<StampSeries> _stampSeries;
        private readonly StampContext _stampsContext;

        public StampSeriesQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _stampSeries = stampsContext.StampSeries.AsNoTracking();
        }

        public Task<StampSeriesProjection[]> AllStampSeriesAsync()
        {
            return _stampSeries.Select(x => new StampSeriesProjection(x.Id, x.Text, x.Date)).ToArrayAsync();
        }

        public Task<StampSeriesProjection[]> StampSeriesFilteredAsync(StampSeriesFilter filter)
        {
            return StampSeriesQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByDates(filter.DateFrom, filter.DateTo)
                .Build()
                .Select(x =>
                    new StampSeriesProjection
                    (
                        x.Id,
                        x.Text,
                        x.Date
                    ))
                .ToArrayAsync();
        }
    }
}