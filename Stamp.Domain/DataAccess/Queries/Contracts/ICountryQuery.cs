using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface ICountryQuery
    {
        Task<CountryProjection[]> AllCountriesAsync();
        Task<CountryProjection[]> CountriesFilteredAsync(CountryFilter filter);
    }
}
