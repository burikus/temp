using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface IPictureSettingQuery
    {
        Task<PictureSettingProjection> AllPictureSettingsAsync();
    }
}
