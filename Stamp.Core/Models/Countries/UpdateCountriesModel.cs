using Domain.Enums;

namespace Stamp.Core.Models.Countries
{
    public record UpdateCountriesModel(UpdateCountryModel[] Data);

    public record UpdateCountryModel(Guid Id, CountryCode? Code = null, string? Description = null);
}
