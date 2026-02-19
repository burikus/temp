using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class StampInfoRepository : IStampInfoRepository
    {
        private readonly DbSet<StampInfo> _stampInfos;
        private readonly IUnitOfWork _unitOfWork;

        public StampInfoRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _stampInfos = context.Stamp;
        }

        public async Task CreateRangeAsync(StampInfo[] stampInfos)
        {
            await _stampInfos.AddRangeAsync(stampInfos);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(StampInfo[] stampInfos)
        {
            _stampInfos.UpdateRange(stampInfos);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(StampInfo[] stampInfos)
        {
            _stampInfos.RemoveRange(stampInfos);
            await _unitOfWork.Commit();
        }

        public async Task<StampInfo[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByIssueDateAsync(DateTimeOffset? issueDateFrom, DateTimeOffset? issueDateTo)
        {
            var query = _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme);

            if (issueDateFrom.HasValue && issueDateTo.HasValue)
                return await query
                    .Where(x => x.IssueDate.Date >= issueDateFrom.Value.Date && x.IssueDate.Date <= issueDateTo.Value.Date).ToArrayAsync();
            else if (issueDateFrom.HasValue)
                return await query
                    .Where(x => x.IssueDate.Date >= issueDateFrom.Value.Date).ToArrayAsync();
            else if (issueDateTo.HasValue)
                return await query
                    .Where(x => x.IssueDate.Date <= issueDateTo.Value.Date).ToArrayAsync();

            return Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByPrintedCopiesAsync(int? printedCopiesMin, int? printedCopiesMax)
        {
            var query = _stampInfos
                   .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                   .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme);

            if (printedCopiesMin.HasValue && printedCopiesMax.HasValue)
                return await query
                    .Where(x => x.PrintedCopies >= printedCopiesMin.Value && x.PrintedCopies <= printedCopiesMax.Value).ToArrayAsync();
            else if (printedCopiesMin.HasValue)
                return await query
                    .Where(x => x.PrintedCopies >= printedCopiesMin.Value).ToArrayAsync();
            else if (printedCopiesMax.HasValue)
                return await query
                    .Where(x => x.PrintedCopies <= printedCopiesMax.Value).ToArrayAsync();

            return Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByDesignerAsync(string? designer)
        {
            return !string.IsNullOrWhiteSpace(designer)
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => !string.IsNullOrWhiteSpace(x.Designer) && x.Designer.ToLower().Contains(designer.ToLower())).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByIsKindOfAsync(bool? isKindOf)
        {
            return isKindOf.HasValue
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.IsKindOf == isKindOf).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByIsDefectAsync(bool? isDefect)
        {
            return isDefect.HasValue
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.IsDefect == isDefect).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByIsAdditionalAsync(bool? isAdditional)
        {
            return isAdditional.HasValue
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.IsAdditional == isAdditional).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByIsUVAsync(bool? isUV)
        {
            return isUV.HasValue
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.IsUV == isUV).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByIsForm2Async(bool? isForm2)
        {
            return isForm2.HasValue
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.IsForm2 == isForm2).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByIssueFormAsync(StampCode? stampCode)
        {
            return stampCode != null
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.Picture.StampType.StampCode == stampCode).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByPictureIdsAsync(Guid[]? pictureIds)
        {
            return pictureIds.HasAny()
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => pictureIds!.Distinct().Contains(x.PictureId)).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByWatermarkIdsAsync(Guid[]? watermarkIds)
        {
            return watermarkIds.HasAny()
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.WatermarkId.HasValue && watermarkIds!.Distinct().Contains(x.WatermarkId.Value)).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByRasterIdsAsync(Guid[]? rasterIds)
        {
            return rasterIds.HasAny()
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.RasterId.HasValue && rasterIds!.Distinct().Contains(x.RasterId.Value)).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByPerforationIdsAsync(Guid[]? perforationIds)
        {
            return perforationIds.HasAny()
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.PerforationId.HasValue && perforationIds!.Distinct().Contains(x.PerforationId.Value)).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByPrintTypeIdsAsync(Guid[]? printTypeIds)
        {
            return printTypeIds.HasAny()
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.PrintTypeId.HasValue && printTypeIds!.Distinct().Contains(x.PrintTypeId.Value)).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByPaperIdsAsync(Guid[]? paperIds)
        {
            return paperIds.HasAny()
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries).Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                    .Where(x => x.PaperId.HasValue && paperIds!.Distinct().Contains(x.PaperId.Value)).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task<StampInfo[]> GetByThemeIdsAsync(Guid[]? themeIds)
        {
            return themeIds.HasAny()
                ? await _stampInfos
                    .Include(x => x.Paper).Include(x => x.Perforation).Include(x => x.PrintType).Include(x => x.Raster)
                    .Include(x => x.Theme).Include(x => x.Watermark).Include(x => x.Picture).Include(x => x.StampSeries)
                    .Where(x => x.ThemeId.HasValue && themeIds!.Distinct().Contains(x.ThemeId.Value)).ToArrayAsync()
                : Array.Empty<StampInfo>();
        }

        public async Task UpdateSubMenuAsync(Guid[] submenuIds)
        {
            if (submenuIds.Length > 0)
            {
                var items = await _stampInfos.IgnoreQueryFilters().Where(x => x.SubMenuId.HasValue && submenuIds.Contains(x.SubMenuId.Value)).ToArrayAsync();

                foreach (var item in items)
                {
                    item.SubMenuId = null;
                    item.SubMenuPosition = null;
                }

                _stampInfos.UpdateRange(items);
                await _unitOfWork.Commit();
            }
        }
    }
}