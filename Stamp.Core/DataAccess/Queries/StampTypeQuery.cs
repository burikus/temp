using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class StampTypeQuery : IStampTypeQuery
    {
        private readonly IQueryable<StampType> _stampTypes;
        private readonly StampContext _stampsContext;

        public StampTypeQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _stampTypes = stampsContext.StampType.AsNoTracking();
        }

        public Task<StampTypeProjection[]> AllStampTypesAsync()
        {
            return _stampTypes.Select(x => new StampTypeProjection(x.Id, x.StampCode, x.Description, x.Horizontal, x.Vertical)).ToArrayAsync();
        }

        public Task<StampTypeProjection[]> StampTypesFilteredAsync(StampTypeFilter filter)
        {
            return StampTypeQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .BySize(filter.Horizontal, filter.Vertical)
                .Build()
                .Select(x =>
                    new StampTypeProjection
                    (
                        x.Id,
                        x.StampCode,
                        x.Description,
                        x.Horizontal,
                        x.Vertical
                    ))
                .ToArrayAsync();
        }
    }
}