using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Countries;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class CountryService : ICountryService
    {
        private readonly ICountryQuery _countryQuery;
        private readonly ICountryRepository _countryRepository;

        public CountryService(ICountryQuery countryQuery, ICountryRepository countryRepository)
        {
            _countryQuery = SystemObjects.RequireNotNull(countryQuery, nameof(countryQuery));
            _countryRepository = SystemObjects.RequireNotNull(countryRepository, nameof(countryRepository));
        }

        public async Task<Result<CountriesResponseModel>> AllCountriesAsync()
        {
            var result = await _countryQuery.AllCountriesAsync();

            return Result<CountriesResponseModel>.Ok(new CountriesGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateCountriesAsync(UpdateCountriesModel model)
        {
            var countries = await _countryRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!countries.HasAny())
                return Result<string>.BadRequest("Страны для обновления не найдены.");

            foreach (var country in countries)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == country.Id);
                country.Code = current?.Code ?? country.Code;
                country.Description = current?.Description ?? country.Description;
            }

            await _countryRepository.UpdateRangeAsync(countries);

            return Result<string>.Ok("Страны обновлены.");
        }

        public async Task<Result<string>> AddCountriesAsync(CreateCountriesModel model)
        {
            var countries = (await _countryQuery.CountriesFilteredAsync(new CountryFilter(Codes: model.Data.Select(x => x.Code).ToArray())));
            if (countries.HasAny())
                return Result<string>.BadRequest("Страны уже существуют.");

            var newCountries = model.Data.Select(x =>
                new Country
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    Description = x.Description
                })
                .ToArray();

            await _countryRepository.CreateRangeAsync(newCountries);

            return Result<string>.Ok("Страны добавлены.");
        }

        public async Task<Result<string>> DeleteCountriesAsync(DeleteCountriesModel model)
        {
            var countries = await _countryRepository.GetByIdsAsync(model.Ids);
            if (!countries.HasAny())
                return Result<string>.BadRequest("Страны не существуют.");

            await _countryRepository.DeleteRangeAsync(countries);

            return Result<string>.Ok("Страны удалены.");
        }
    }
}
