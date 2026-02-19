using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class PaperQuery : IPaperQuery
    {
        private readonly IQueryable<Paper> _papers;
        private readonly StampContext _stampsContext;

        public PaperQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _papers = stampsContext.Paper.AsNoTracking();
        }

        public Task<PaperProjection[]> AllPapersAsync()
        {
            return _papers.Select(x => new PaperProjection(x.Id, x.Code, x.Description, x.ImageFile)).ToArrayAsync();
        }

        public Task<PaperProjection[]> PapersFilteredAsync(PaperFilter filter)
        {
            return PaperQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .Build()
                .Select(x =>
                    new PaperProjection
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
