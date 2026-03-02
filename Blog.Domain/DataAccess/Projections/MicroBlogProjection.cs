namespace Blog.Domain.DataAccess.Projections
{
    public record MicroBlogProjection(Guid Id, Guid? MenuId, int? MenuPosition, bool IsActive, InfoProjection[] Infos);
}
