using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class RasterQuery : IRasterQuery
    {
        private readonly IQueryable<Raster> _rasters;
        private readonly StampContext _stampsContext;

        public RasterQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _rasters = stampsContext.Raster.AsNoTracking();
        }

        public Task<RasterProjection[]> AllRastersAsync()
        {
            return _rasters.Select(x => new RasterProjection(x.Id, x.Code, x.Description, x.ImageFile)).ToArrayAsync();
        }

        public Task<RasterProjection[]> RastersFilteredAsync(RasterFilter filter)
        {
            return RasterQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .Build()
                .Select(x =>
                    new RasterProjection
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
