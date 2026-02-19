using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class PerforationQueryBuilder
    {
        private IQueryable<Perforation> _queryable;

        public static PerforationQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Perforation.AsQueryable().AsNoTracking();

            return new PerforationQueryBuilder(queryable);
        }

        private PerforationQueryBuilder(IQueryable<Perforation> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Perforation> Build()
        {
            return _queryable;
        }

        public PerforationQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public PerforationQueryBuilder ByCodes(PerforationCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }
    }
}
