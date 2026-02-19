using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class PrintTypeQuery : IPrintTypeQuery
    {
        private readonly IQueryable<PrintType> _printTypes;
        private readonly StampContext _stampsContext;

        public PrintTypeQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _printTypes = stampsContext.PrintType.AsNoTracking();
        }

        public Task<PrintTypeProjection[]> AllPrintTypesAsync()
        {
            return _printTypes.Select(x => new PrintTypeProjection(x.Id, x.Code, x.Description, x.ImageFile)).ToArrayAsync();
        }

        public Task<PrintTypeProjection[]> PrintTypesFilteredAsync(PrintTypeFilter filter)
        {
            return PrintTypeQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .Build()
                .Select(x =>
                    new PrintTypeProjection
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
