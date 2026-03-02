namespace Blog.Domain.DataAccess.Projections
{
    public record SwipperProjection(Guid Id, byte[] Image, bool IsActive, Guid? MenuId);
}
