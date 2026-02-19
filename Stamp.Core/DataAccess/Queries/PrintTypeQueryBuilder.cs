using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class PrintTypeQueryBuilder
    {
        private IQueryable<PrintType> _queryable;

        public static PrintTypeQueryBuilder From(StampContext _context)
        {
            var queryable = _context.PrintType.AsQueryable().AsNoTracking();

            return new PrintTypeQueryBuilder(queryable);
        }

        private PrintTypeQueryBuilder(IQueryable<PrintType> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<PrintType> Build()
        {
            return _queryable;
        }

        public PrintTypeQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public PrintTypeQueryBuilder ByCodes(PrintTypeCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }
    }
}
