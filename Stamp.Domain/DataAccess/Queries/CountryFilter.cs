using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record CountryFilter(Guid[]? Ids = null, CountryCode[]? Codes = null);
}
