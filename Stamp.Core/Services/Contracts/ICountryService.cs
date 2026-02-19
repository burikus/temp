using Domain.Core;

using Stamp.Core.Models.Countries;

namespace Stamp.Core.Services.Contracts
{
    public interface ICountryService
    {
        Task<Result<CountriesResponseModel>> AllCountriesAsync();
        Task<Result<string>> UpdateCountriesAsync(UpdateCountriesModel model);
        Task<Result<string>> AddCountriesAsync(CreateCountriesModel model);
        Task<Result<string>> DeleteCountriesAsync(DeleteCountriesModel model);
    }
}
