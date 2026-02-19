using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record WatermarkProjection(Guid Id, WatermarkCode Code, string Description, byte[]? ImageFile);
}
