using Domain.Enums;

namespace Stamp.Core.Models.Countries
{
    public record CountriesResponseModel(CountryResponseModel[] Data, int TotalCount);

    public record CountryResponseModel(Guid Id, CountryCode Code, string Description);
}
