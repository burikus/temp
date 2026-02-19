using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class PictureSettingRepository : IPictureSettingRepository
    {
        private readonly DbSet<PictureSetting> _pictureSettings;
        private readonly IUnitOfWork _unitOfWork;

        public PictureSettingRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _pictureSettings = context.PictureSetting;
        }

        public async Task CreateRangeAsync(PictureSetting[] pictureSettings)
        {
            await _pictureSettings.AddRangeAsync(pictureSettings);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(PictureSetting[] pictureSettings)
        {
            _pictureSettings.UpdateRange(pictureSettings);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(PictureSetting[] pictureSettings)
        {
            _pictureSettings.RemoveRange(pictureSettings);
            await _unitOfWork.Commit();
        }

        public async Task<PictureSetting[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _pictureSettings.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<PictureSetting>();
        }
    }
}
