using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class WatermarkQuery : IWatermarkQuery
    {
        private readonly IQueryable<Watermark> _watermarks;
        private readonly StampContext _stampsContext;

        public WatermarkQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _watermarks = stampsContext.Watermark.AsNoTracking();
        }

        public Task<WatermarkProjection[]> AllWatermarksAsync()
        {
            return _watermarks.Select(x => new WatermarkProjection(x.Id, x.Code, x.Description, x.ImageFile)).ToArrayAsync();
        }

        public Task<WatermarkProjection[]> WatermarksFilteredAsync(WatermarkFilter filter)
        {
            return WatermarkQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .Build()
                .Select(x =>
                    new WatermarkProjection
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
