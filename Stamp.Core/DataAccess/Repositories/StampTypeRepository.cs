using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class StampTypeRepository : IStampTypeRepository
    {
        private readonly DbSet<StampType> _stampTypes;
        private readonly IUnitOfWork _unitOfWork;

        public StampTypeRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _stampTypes = context.StampType;
        }

        public async Task CreateRangeAsync(StampType[] stampTypes)
        {
            await _stampTypes.AddRangeAsync(stampTypes);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(StampType[] stampTypes)
        {
            _stampTypes.UpdateRange(stampTypes);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(StampType[] stampTypes)
        {
            _stampTypes.RemoveRange(stampTypes);
            await _unitOfWork.Commit();
        }

        public async Task<StampType[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _stampTypes
                    .Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<StampType>();
        }

        public async Task<StampType[]> GetByCodesAsync(StampCode[]? codes)
        {
            return codes.HasAny()
                ? await _stampTypes
                    .Where(x => codes!.Distinct().Contains(x.StampCode)).ToArrayAsync()
                : Array.Empty<StampType>();
        }
    }
}
