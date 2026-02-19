namespace Stamp.Domain.DataAccess.Projections
{
    public record BackgroundProjection(Guid Id, byte[] Image, bool IsActive, int Number, string Name, int imageMaxSize);
}
