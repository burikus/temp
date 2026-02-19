using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface ICountryRepository
    {
        Task CreateRangeAsync(Country[] countries);
        Task UpdateRangeAsync(Country[] countries);
        Task DeleteRangeAsync(Country[] countries);
        Task<Country[]> GetByIdsAsync(Guid[]? ids);
        Task<Country[]> GetByCodesAsync(CountryCode[]? codes);
    }
}
