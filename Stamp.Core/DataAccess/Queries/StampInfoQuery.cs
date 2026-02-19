using Domain.Dtos;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class StampInfoQuery : IStampInfoQuery
    {
        private readonly IQueryable<StampInfo> _stampInfos;
        private readonly StampContext _stampsContext;

        public StampInfoQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _stampInfos = stampsContext.Stamp.AsNoTracking();
        }

        public Task<StampInfoProjection[]> AllStampInfosAsync(PageDto page)
        {
            return _stampInfos
                .Include(x => x.Paper)
                .Include(x => x.Perforation)
                .Include(x => x.PrintType)
                .Include(x => x.Raster)
                .Include(x => x.StampSeries)
                .Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                .Include(x => x.Watermark)
                .Include(x => x.Picture)
                .Select(x =>
                    new StampInfoProjection
                    {
                        Id = x.Id,
                        Background = x.Background,
                        Color = x.Color,
                        Description = x.Description,
                        Designer = x.Designer,
                        IsAdditional = x.IsAdditional,
                        IsDefect = x.IsDefect,
                        IsKindOf = x.IsKindOf,
                        IssueDate = x.IssueDate,
                        IsUV = x.IsUV,
                        IsForm2 = x.IsForm2,
                        LinkToCatalogEmitter = x.LinkToCatalogEmitter,
                        PrintedCopies = x.PrintedCopies,
                        Size = x.Size,
                        Position = x.Position,
                        SubMenuId = x.SubMenuId,
                        SubMenuPosition = x.SubMenuPosition,
                    })
                .OrderBy(x => x.SubMenuPosition).ThenBy(x => x.IssueDate)
                .Page(page.PageNumber, page.PageSize)
                .ToArrayAsync();
        }

        public Task<StampInfoProjection[]> StampInfosFilteredAsync(StampInfoFilter filter)
        {
            return StampInfoQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByIssueDate(filter.IssueDateFrom, filter.IssueDateTo)
                .ByPrintedCopies(filter.PrintedCopiesMin, filter.PrintedCopiesMax)
                .ByDesigner(filter.Designer)
                .ByIsKindOf(filter.IsKindOf)
                .ByIsDefect(filter.IsDefect)
                .ByIsAdditional(filter.IsAdditional)
                .ByIsUV(filter.IsUV)
                .ByIsForm2(filter.IsForm2)
                .ByPictureIds(filter.PictureIds)
                .ByWatermarkIds(filter.WatermarkIds)
                .ByRasterIds(filter.RasterIds)
                .ByPerforationIds(filter.PerforationIds)
                .ByPrintTypeIds(filter.PrintTypeIds)
                .ByPaperIds(filter.PaperIds)
                .ByThemeIds(filter.ThemeIds)
                .BySubMenuId(filter.SubMenuId)
                .Build()
                .Include(x => x.Paper)
                .Include(x => x.Perforation)
                .Include(x => x.PrintType)
                .Include(x => x.Raster)
                .Include(x => x.StampSeries)
                .Include(x => x.Theme).ThenInclude(x => x.SubTheme)
                .Include(x => x.Watermark)
                .Include(x => x.Picture)
                .Select(x =>
                    new StampInfoProjection
                    {
                        Id = x.Id,
                        Background = x.Background,
                        Color = x.Color,
                        Description = x.Description,
                        Designer = x.Designer,
                        IsAdditional = x.IsAdditional,
                        IsDefect = x.IsDefect,
                        IsKindOf = x.IsKindOf,
                        IssueDate = x.IssueDate,
                        IsUV = x.IsUV,
                        IsForm2 = x.IsForm2,
                        LinkToCatalogEmitter = x.LinkToCatalogEmitter,
                        PrintedCopies = x.PrintedCopies,
                        Size = x.Size
                    })
                .OrderBy(x => x.SubMenuPosition).ThenBy(x => x.IssueDate)
                .ToArrayAsync();
        }
    }
}
