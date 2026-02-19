using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class PaperQueryBuilder
    {
        private IQueryable<Paper> _queryable;

        public static PaperQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Paper.AsQueryable().AsNoTracking();

            return new PaperQueryBuilder(queryable);
        }

        private PaperQueryBuilder(IQueryable<Paper> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Paper> Build()
        {
            return _queryable;
        }

        public PaperQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public PaperQueryBuilder ByCodes(PaperCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }
    }
}
