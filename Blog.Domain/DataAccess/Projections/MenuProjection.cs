namespace Blog.Domain.DataAccess.Projections
{
    public record MenuProjection(Guid Id, string Name, bool IsActive, int Position, Guid TextFormattingId);
}
