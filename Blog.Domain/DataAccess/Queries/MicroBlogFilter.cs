namespace Blog.Domain.DataAccess.Queries
{
    public record MicroBlogFilter(bool IsAdmin, Guid[]? Ids = null);
}
