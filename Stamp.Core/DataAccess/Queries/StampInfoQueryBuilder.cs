using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class StampInfoQueryBuilder
    {
        private IQueryable<StampInfo> _queryable;

        public static StampInfoQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Stamp.AsQueryable().AsNoTracking();

            return new StampInfoQueryBuilder(queryable);
        }

        private StampInfoQueryBuilder(IQueryable<StampInfo> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<StampInfo> Build()
        {
            return _queryable;
        }

        public StampInfoQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public StampInfoQueryBuilder ByIssueDate(DateTimeOffset? dateFrom, DateTimeOffset? dateTo)
        {
            if (dateFrom.HasValue && dateTo.HasValue)
                _queryable = _queryable.Where(x => x.IssueDate.Date >= dateFrom.Value.Date && x.IssueDate.Date <= dateTo.Value.Date);
            else if (dateFrom.HasValue)
                _queryable = _queryable.Where(x => x.IssueDate.Date >= dateFrom.Value.Date);
            else if (dateTo.HasValue)
                _queryable = _queryable.Where(x => x.IssueDate.Date <= dateTo.Value.Date);

            return this;
        }

        public StampInfoQueryBuilder ByPrintedCopies(int? copiesMin, int? copiesMax)
        {
            if (copiesMax.HasValue && copiesMin.HasValue)
                _queryable = _queryable.Where(x => x.PrintedCopies >= copiesMin.Value && x.PrintedCopies <= copiesMax.Value);
            else if (copiesMin.HasValue)
                _queryable = _queryable.Where(x => x.PrintedCopies >= copiesMin.Value);
            else if (copiesMax.HasValue)
                _queryable = _queryable.Where(x => x.PrintedCopies <= copiesMax.Value);

            return this;
        }

        public StampInfoQueryBuilder ByDesigner(string? designer)
        {
            if (!string.IsNullOrWhiteSpace(designer))
                _queryable = _queryable.Where(x => !string.IsNullOrWhiteSpace(x.Designer) && x.Designer!.ToLower().Contains(designer.ToLower()));

            return this;
        }

        public StampInfoQueryBuilder ByIsKindOf(bool? isKindOf)
        {
            if (isKindOf.HasValue)
                _queryable = _queryable.Where(x => x.IsKindOf == isKindOf);

            return this;
        }

        public StampInfoQueryBuilder ByIsDefect(bool? isDefect)
        {
            if (isDefect.HasValue)
                _queryable = _queryable.Where(x => x.IsDefect == isDefect);

            return this;
        }

        public StampInfoQueryBuilder ByIsAdditional(bool? isAdditional)
        {
            if (isAdditional.HasValue)
                _queryable = _queryable.Where(x => x.IsAdditional == isAdditional);

            return this;
        }

        public StampInfoQueryBuilder ByIsUV(bool? isUV)
        {
            if (isUV.HasValue)
                _queryable = _queryable.Where(x => x.IsUV == isUV);

            return this;
        }

        public StampInfoQueryBuilder ByIsForm2(bool? isForm2)
        {
            if (isForm2.HasValue)
                _queryable = _queryable.Where(x => x.IsForm2 == isForm2);

            return this;
        }

        public StampInfoQueryBuilder ByPictureIds(Guid[]? pictureIds)
        {
            if (pictureIds.HasAny())
                _queryable = _queryable.Where(x => pictureIds!.Distinct().Contains(x.PictureId));

            return this;
        }

        public StampInfoQueryBuilder ByWatermarkIds(Guid[]? watermarkIds)
        {
            if (watermarkIds.HasAny())
                _queryable = _queryable.Where(x => x.WatermarkId.HasValue && watermarkIds!.Distinct().Contains(x.WatermarkId.Value));

            return this;
        }

        public StampInfoQueryBuilder ByRasterIds(Guid[]? rasterIds)
        {
            if (rasterIds.HasAny())
                _queryable = _queryable.Where(x => x.RasterId.HasValue && rasterIds!.Distinct().Contains(x.RasterId.Value));

            return this;
        }

        public StampInfoQueryBuilder ByPerforationIds(Guid[]? perforationIds)
        {
            if (perforationIds.HasAny())
                _queryable = _queryable.Where(x => x.PerforationId.HasValue && perforationIds!.Distinct().Contains(x.PerforationId.Value));

            return this;
        }

        public StampInfoQueryBuilder ByPrintTypeIds(Guid[]? printTypeIds)
        {
            if (printTypeIds.HasAny())
                _queryable = _queryable.Where(x => x.PrintTypeId.HasValue && printTypeIds!.Distinct().Contains(x.PrintTypeId.Value));

            return this;
        }

        public StampInfoQueryBuilder ByPaperIds(Guid[]? paperIds)
        {
            if (paperIds.HasAny())
                _queryable = _queryable.Where(x => x.PaperId.HasValue && paperIds!.Distinct().Contains(x.PaperId.Value));

            return this;
        }

        public StampInfoQueryBuilder ByThemeIds(Guid[]? themeIds)
        {
            if (themeIds.HasAny())
                _queryable = _queryable.Where(x => x.ThemeId.HasValue && themeIds!.Distinct().Contains(x.ThemeId.Value));

            return this;
        }

        public StampInfoQueryBuilder BySubMenuId(Guid? subMenuId)
        {
            if (subMenuId.HasValue)
                _queryable = _queryable.Where(x => x.SubMenuId.HasValue && x.SubMenuId.Value == subMenuId);

            return this;
        }
    }
}