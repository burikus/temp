using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record RasterFilter(Guid[]? Ids = null, RasterCode[]? Codes = null);
}
