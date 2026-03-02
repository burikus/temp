using Blog.Domain.DataAccess.Projections;

namespace Blog.Domain.DataAccess.Queries.Contracts
{
    public interface ISwipperQuery
    {
        Task<SwipperProjection[]> AllSwippersAsync(bool isAdmin);
    }
}
