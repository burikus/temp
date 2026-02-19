using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class PerforationRepository : IPerforationRepository
    {
        private readonly DbSet<Perforation> _perforations;
        private readonly IUnitOfWork _unitOfWork;

        public PerforationRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _perforations = context.Perforation;
        }

        public async Task CreateRangeAsync(Perforation[] perforations)
        {
            await _perforations.AddRangeAsync(perforations);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Perforation[] perforations)
        {
            _perforations.UpdateRange(perforations);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Perforation[] perforations)
        {
            _perforations.RemoveRange(perforations);
            await _unitOfWork.Commit();
        }

        public async Task<Perforation[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _perforations.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<Perforation>();
        }

        public async Task<Perforation[]> GetByCodesAsync(PerforationCode[]? codes)
        {
            return codes.HasAny()
                ? await _perforations.Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<Perforation>();
        }
    }
}
