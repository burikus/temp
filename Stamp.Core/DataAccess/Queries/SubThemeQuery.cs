using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class SubThemeQuery : ISubThemeQuery
    {
        private readonly IQueryable<SubTheme> _subThemes;
        private readonly StampContext _stampsContext;

        public SubThemeQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _subThemes = stampsContext.SubTheme.AsNoTracking();
        }

        public Task<SubThemeProjection[]> AllSubThemesAsync()
        {
            return _subThemes.Select(x => new SubThemeProjection(x.Id, x.Code, x.Description)).ToArrayAsync();
        }

        public Task<SubThemeProjection[]> SubThemesFilteredAsync(SubThemeFilter filter)
        {
            return SubThemeQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByCodes(filter.Codes)
                .Build()
                .Select(x =>
                    new SubThemeProjection
                    (
                        x.Id,
                        x.Code,
                        x.Description
                    ))
                .ToArrayAsync();
        }
    }
}