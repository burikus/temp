namespace Blog.Domain.DataAccess.Projections
{
    public record InfoProjection(Guid Id, string Text, bool IsActive, Guid TextFormattingId);
}
