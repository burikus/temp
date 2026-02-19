using Domain.Enums;

namespace Stamp.Domain.DataAccess.Projections
{
    public record StampTypeProjection(Guid Id, StampCode StampCode, string Description, int Horizontal, int Vertical);
}