using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Core.DataAccess.Queries
{
    public class PictureQueryBuilder
    {
        private IQueryable<Picture> _queryable;

        public static PictureQueryBuilder From(StampContext _context)
        {
            var queryable = _context.Picture.AsQueryable().AsNoTracking();

            return new PictureQueryBuilder(queryable);
        }

        private PictureQueryBuilder(IQueryable<Picture> queryable)
        {
            _queryable = queryable;
        }

        public IQueryable<Picture> Build()
        {
            return _queryable;
        }

        public PictureQueryBuilder ByIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.Id));

            return this;
        }

        public PictureQueryBuilder ByStampTypeIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.StampTypeId));

            return this;
        }

        public PictureQueryBuilder ByCountryIds(Guid[]? ids)
        {
            if (ids.HasAny())
                _queryable = _queryable.Where(x => ids!.Distinct().Contains(x.CountryId));

            return this;
        }

        public PictureQueryBuilder ByNames(string[]? names)
        {
            if (names.HasAny())
                _queryable = _queryable.Where(x => names.DistinctString()!.Contains(x.Name));

            return this;
        }

        public PictureQueryBuilder ByIssueYears(int[]? years)
        {
            if (years.HasAny())
                _queryable = _queryable.Where(x => years!.Distinct().Contains(x.StampInfo.IssueDate.Year));

            return this;
        }

        public PictureQueryBuilder ByStampCodes(StampCode[]? stampCodes)
        {
            if (stampCodes.HasAny())
                _queryable = _queryable.Where(x => stampCodes!.Contains(x.StampType.StampCode));

            return this;
        }

        public PictureQueryBuilder BySubMenuId(Guid? subMenuId)
        {
            if (subMenuId.HasValue)
                _queryable = _queryable.Where(x => x.StampInfo.SubMenuId.HasValue && x.StampInfo.SubMenuId.Value == subMenuId);

            return this;
        }
    }
}