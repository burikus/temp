using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class BackgroundRepository : IBackgroundRepository
    {
        private readonly DbSet<Background> _bgnd;

        public BackgroundRepository(StampContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _bgnd = context.Background;
        }

        public Task<Background[]> GetByIdsAsync(Guid[] uids)
        {
            return _bgnd.Where(x => uids.Contains(x.Id)).ToArrayAsync();
        }

        public Task CreateRangeAsync(Background[] bgnd)
        {
            _bgnd.AddRangeAsync(bgnd);

            return Task.CompletedTask;
        }

        public Task UpdateRangeAsync(Background[] bgnds)
        {
            _bgnd.UpdateRange(bgnds);

            return Task.CompletedTask;
        }

        public Task DeleteRangeAsync(Background[] bgnds)
        {
            _bgnd.RemoveRange(bgnds);

            return Task.CompletedTask;
        }
    }
}
