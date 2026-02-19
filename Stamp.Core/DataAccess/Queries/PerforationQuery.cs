using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class PerforationQuery : IPerforationQuery
    {
        private readonly IQueryable<Perforation> _perforations;
        private readonly StampContext _stampsContext;

        public PerforationQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _perforations = stampsContext.Perforation.AsNoTracking();
        }

        public Task<PerforationProjection[]> AllPerforationsAsync()
        {
            return _perforations.Select(x => new PerforationProjection(x.Id, x.Code, x.Description, x.ImageFile)).ToArrayAsync();
        }

        public Task<PerforationProjection[]> PerforationsFilteredAsync(PerforationFilter filter)
        {
            return PerforationQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .Build()
                .Select(x =>
                    new PerforationProjection
                    (
                        x.Id,
                        x.Code,
                        x.Description,
                        x.ImageFile
                    ))
                .ToArrayAsync();
        }
    }
}
