using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IStampInfoRepository
    {
        Task CreateRangeAsync(StampInfo[] stampInfos);
        Task UpdateRangeAsync(StampInfo[] stampInfos);
        Task DeleteRangeAsync(StampInfo[] stampInfos);
        Task UpdateSubMenuAsync(Guid[] submenuIds);

        Task<StampInfo[]> GetByIdsAsync(Guid[]? ids);
        Task<StampInfo[]> GetByIssueDateAsync(DateTimeOffset? issueDateFrom, DateTimeOffset? issueDateTo);
        Task<StampInfo[]> GetByPrintedCopiesAsync(int? printedCopiesMin, int? printedCopiesMax);
        Task<StampInfo[]> GetByDesignerAsync(string? designer);
        Task<StampInfo[]> GetByIsKindOfAsync(bool? isKindOf);
        Task<StampInfo[]> GetByIsDefectAsync(bool? isDefect);
        Task<StampInfo[]> GetByIsAdditionalAsync(bool? isAdditional);
        Task<StampInfo[]> GetByIsUVAsync(bool? isUV);
        Task<StampInfo[]> GetByIsForm2Async(bool? isForm2);
        Task<StampInfo[]> GetByIssueFormAsync(StampCode? stampCode);

        Task<StampInfo[]> GetByPictureIdsAsync(Guid[]? pictureIds);
        Task<StampInfo[]> GetByWatermarkIdsAsync(Guid[]? watermarkIds);
        Task<StampInfo[]> GetByRasterIdsAsync(Guid[]? rasterIds);
        Task<StampInfo[]> GetByPerforationIdsAsync(Guid[]? perforationIds);
        Task<StampInfo[]> GetByPrintTypeIdsAsync(Guid[]? printTypeIds);
        Task<StampInfo[]> GetByPaperIdsAsync(Guid[]? paperIds);
        Task<StampInfo[]> GetByThemeIdsAsync(Guid[]? themeIds);
    }
}
