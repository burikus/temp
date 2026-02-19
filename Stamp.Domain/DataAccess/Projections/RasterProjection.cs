using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record RasterProjection(Guid Id, RasterCode Code, string Description, byte[]? ImageFile);
}
