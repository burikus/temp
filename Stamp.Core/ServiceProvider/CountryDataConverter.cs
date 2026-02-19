using Domain.Core;

using Stamp.Core.Models.Countries;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class CountriesGetConverter : IConverter<CountriesResponseModel, CountryProjection[]>
    {
        private readonly IConverter<CountryResponseModel, CountryProjection> _countryConverter;

        public CountriesGetConverter()
        {
            _countryConverter = new CountryGetConverter();
        }

        public CountriesResponseModel From(CountryProjection[] src)
        {
            return new CountriesResponseModel(_countryConverter.From(src), src.Count());
        }

        public class CountryGetConverter : IConverter<CountryResponseModel, CountryProjection>
        {
            public CountryResponseModel From(CountryProjection src)
            {
                return new CountryResponseModel(src.Id, src.Code, src.Description);
            }
        }
    }
}
