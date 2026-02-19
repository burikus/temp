using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record CountryProjection(Guid Id, CountryCode Code, string Description);
}
