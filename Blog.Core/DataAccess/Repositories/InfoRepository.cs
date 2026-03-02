using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Repositories;

using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Repositories
{
    public class InfoRepository : IInfoRepository
    {
        private readonly DbSet<Info> _infos;
        private readonly BlogContext _context;
        private readonly IUnitOfWork _unitOfWork;

        public InfoRepository(BlogContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _context = context;
            _infos = context.Info;
            _unitOfWork = unitOfWork;
        }

        public Task<Info[]> GetByIdsAsync(Guid[] ids)
        {
            return _infos.Include(x => x.TextFormatting).Where(x => ids.Contains(x.Id)).ToArrayAsync();
        }

        public async Task AddInfosAsync(IEnumerable<Info>? infos = null)
        {
            if (infos.HasAny())
            {
                await _infos.AddRangeAsync(infos!);
                await _unitOfWork.Commit();
            }
        }

        public async Task UpdateInfosAsync(Info[]? infos = null)
        {
            if (infos.HasAny())
            {
                _infos.UpdateRange(infos!);
                await _unitOfWork.Commit();
            }
        }

        public async Task RemoveInfosAsync(IEnumerable<Info>? infos = null)
        {
            if (infos.HasAny())
            {
                _infos.RemoveRange(infos!);
                await _unitOfWork.Commit();
            }
        }
    }
}
