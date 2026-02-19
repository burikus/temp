using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class CountryQuery : ICountryQuery
    {
        private readonly IQueryable<Country> _countries;
        private readonly StampContext _stampsContext;

        public CountryQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _countries = stampsContext.Country.AsNoTracking();
        }

        public Task<CountryProjection[]> AllCountriesAsync()
        {
            return _countries.Select(x => new CountryProjection(x.Id, x.Code, x.Description)).ToArrayAsync();
        }

        public Task<CountryProjection[]> CountriesFilteredAsync(CountryFilter filter)
        {
            return CountryQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .Build()
                .Select(x =>
                    new CountryProjection
                    (
                        x.Id,
                        x.Code,
                        x.Description
                    ))
                .ToArrayAsync();
        }
    }
}
