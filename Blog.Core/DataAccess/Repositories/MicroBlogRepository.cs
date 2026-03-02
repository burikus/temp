using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Repositories;

using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Repositories
{
    public class MicroBlogRepository : IMicroBlogRepository
    {
        private readonly DbSet<MicroBlog> _infos;
        private readonly BlogContext _context;
        private readonly IUnitOfWork _unitOfWork;

        public MicroBlogRepository(BlogContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _context = context;
            _infos = context.MicroBlog;
            _unitOfWork = unitOfWork;
        }

        public Task<MicroBlog[]> GetByIdsAsync(Guid[] ids)
        {
            return _infos
                .Include(x => x.Infos).ThenInclude(x => x.TextFormatting)
                .Where(x => ids.Contains(x.Id))
                .ToArrayAsync();
        }

        public async Task AddMicroBlogsAsync(MicroBlog[]? microBlogs = null)
        {
            if (microBlogs.HasAny())
            {
                await _infos.AddRangeAsync(microBlogs!);
                await _unitOfWork.Commit();
            }
        }

        public async Task UpdateMicroBlogsAsync(IEnumerable<MicroBlog>? microBlogs = null)
        {
            if (microBlogs.HasAny())
            {
                _infos.UpdateRange(microBlogs!);
                await _unitOfWork.Commit();
            }
        }

        public async Task RemoveMicroBlogsAsync(MicroBlog[]? microBlogs = null)
        {
            if (microBlogs.HasAny())
            {
                _infos.RemoveRange(microBlogs!);
                await _unitOfWork.Commit();
            }
        }
    }
}
