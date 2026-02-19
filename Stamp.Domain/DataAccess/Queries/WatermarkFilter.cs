using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record WatermarkFilter(Guid[]? Ids = null, WatermarkCode[]? Codes = null);
}
