using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record PerforationProjection(Guid Id, PerforationCode Code, string Description, byte[]? ImageFile);
}
