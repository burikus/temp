using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record PaperProjection(Guid Id, PaperCode Code, string Description, byte[]? ImageFile);
}
