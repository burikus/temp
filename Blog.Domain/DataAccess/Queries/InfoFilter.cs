namespace Blog.Domain.DataAccess.Queries
{
    public record InfoFilter(bool IsAdmin, Guid[]? Ids = null);
}
