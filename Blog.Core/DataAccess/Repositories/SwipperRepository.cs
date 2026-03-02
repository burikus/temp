using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Repositories;

using Domain.DataAccess.UnitOfWork;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Repositories
{
    public class SwipperRepository : ISwipperRepository
    {
        private readonly DbSet<Swipper> _swippers;
        private readonly IUnitOfWork _unitOfWork;

        public SwipperRepository(BlogContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _swippers = context.Swipper;
            _unitOfWork = unitOfWork;
        }

        public Task<Swipper[]> GetByIdsAsync(Guid[] uids)
        {
            return _swippers.Where(x => uids.Contains(x.Id)).Include(x => x.Menu).ToArrayAsync();
        }

        public async Task CreateRangeAsync(IEnumerable<Swipper> swippers)
        {
            await _swippers.AddRangeAsync(swippers);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Swipper[] swippers)
        {
            _swippers.UpdateRange(swippers);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Swipper[] swippers)
        {
            _swippers.RemoveRange(swippers);
            await _unitOfWork.Commit();
        }
    }
}
