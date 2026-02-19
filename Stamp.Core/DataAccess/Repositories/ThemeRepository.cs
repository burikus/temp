using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class ThemeRepository : IThemeRepository
    {
        private readonly DbSet<Theme> _themes;
        private readonly IUnitOfWork _unitOfWork;

        public ThemeRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _themes = context.Theme;
        }

        public async Task CreateRangeAsync(Theme[] themes)
        {
            await _themes.AddRangeAsync(themes);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Theme[] themes)
        {
            _themes.UpdateRange(themes);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Theme[] themes)
        {
            _themes.RemoveRange(themes);
            await _unitOfWork.Commit();
        }

        public async Task<Theme[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _themes
                    .Include(x => x.SubTheme)
                    .Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<Theme>();
        }

        public async Task<Theme[]> GetByCodesAsync(ThemeCode[]? codes)
        {
            return codes.HasAny()
                ? await _themes
                    .Include(x => x.SubTheme)
                    .Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<Theme>();
        }

        public async Task<Theme[]> GetBySubThemeIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _themes
                    .Include(x => x.SubTheme)
                    .Where(x => x.SubThemeId.HasValue && ids!.Distinct().Contains(x.SubThemeId.Value)).ToArrayAsync()
                : Array.Empty<Theme>();
        }
    }
}
