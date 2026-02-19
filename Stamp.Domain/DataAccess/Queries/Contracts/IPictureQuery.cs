using Domain.Dtos;

using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IPictureQuery
    {
        Task<PictureProjection[]> AllPicturesPagedAsync(PageDto page);
        Task<PictureProjection[]> PicturesFilteredAsync(PictureFilter filter);
    }
}
