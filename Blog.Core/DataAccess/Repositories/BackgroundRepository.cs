using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Repositories;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Repositories
{
    public class BackgroundRepository : IBackgroundRepository
    {
        private readonly DbSet<Background> _bgnd;

        public BackgroundRepository(BlogContext context)
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
