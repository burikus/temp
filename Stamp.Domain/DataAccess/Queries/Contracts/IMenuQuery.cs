using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IMenuQuery
    {
        Task<MenuProjection[]> AllMenuesAsync(bool isAdmin);
    }
}
