using Blog.Domain.DataAccess.Projections;

namespace Blog.Domain.DataAccess.Queries.Contracts
{
    public interface IMenuQuery
    {
        Task<MenuProjection[]> AllMenuesAsync(bool isAdmin);
    }
}
