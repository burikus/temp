using Blog.Domain.DataAccess.Projections;

namespace Blog.Domain.DataAccess.Queries.Contracts
{
    public interface IBackgroundQuery
    {
        Task<BackgroundProjection[]> AllBackgroundsAsync(bool isAdmin);
    }
}
