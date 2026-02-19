using Domain.Enums;

namespace Stamp.Core.Models.Countries
{
    public record CreateCountriesModel(CreateCountryModel[] Data);

    public record CreateCountryModel(CountryCode Code, string Description);
}
