using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record PrintTypeProjection(Guid Id, PrintTypeCode Code, string Description, byte[]? ImageFile);
}
