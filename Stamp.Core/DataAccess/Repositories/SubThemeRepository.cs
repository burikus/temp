using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class SubThemeRepository : ISubThemeRepository
    {
        private readonly DbSet<SubTheme> _subThemes;
        private readonly IUnitOfWork _unitOfWork;

        public SubThemeRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _subThemes = context.SubTheme;
        }

        public async Task CreateRangeAsync(SubTheme[] subThemes)
        {
            await _subThemes.AddRangeAsync(subThemes);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(SubTheme[] subThemes)
        {
            _subThemes.UpdateRange(subThemes);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(SubTheme[] subThemes)
        {
            _subThemes.RemoveRange(subThemes);
            await _unitOfWork.Commit();
        }

        public async Task<SubTheme[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _subThemes
                    .Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<SubTheme>();
        }

        public async Task<SubTheme[]> GetByCodesAsync(SubThemeCode[]? codes)
        {
            return codes.HasAny()
                ? await _subThemes
                    .Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<SubTheme>();
        }
    }
}
