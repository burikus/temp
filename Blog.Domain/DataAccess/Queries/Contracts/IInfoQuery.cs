using Blog.Domain.DataAccess.Projections;

namespace Blog.Domain.DataAccess.Queries.Contracts
{
    public interface IInfoQuery
    {
        Task<InfoProjection[]> InfoByFilterAsync(InfoFilter filter);
    }
}
