using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class CountryQueryBuilder
    {
        private IQueryable<Country> _queryable;

        public static CountryQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Country.AsQueryable().AsNoTracking();

            return new CountryQueryBuilder(queryable);
        }

        private CountryQueryBuilder(IQueryable<Country> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Country> Build()
        {
            return _queryable;
        }

        public CountryQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public CountryQueryBuilder ByCodes(CountryCode[]? codes)
        {
            if (codes.HasAny())
                _queryable = _queryable.Where(x => codes!.Distinct().Contains(x.Code));

            return this;
        }
    }
}
