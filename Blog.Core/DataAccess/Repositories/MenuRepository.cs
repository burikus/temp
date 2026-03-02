using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Repositories;

using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Repositories
{
    public class MenuRepository : IMenuRepository
    {
        private readonly DbSet<Menu> _menues;
        private readonly BlogContext _context;
        private readonly IUnitOfWork _unitOfWork;

        public MenuRepository(BlogContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _context = context;
            _menues = context.Menu;
            _unitOfWork = unitOfWork;
        }

        public Task<Menu[]> AllAsync(bool isAdmin = false)
        {
            if (isAdmin)
            {
                return _menues
                    .IgnoreQueryFilters()
                    .ToArrayAsync();
            }

            return _menues.ToArrayAsync();
        }

        public async Task AddMenuAsync(Menu[] menues = null)
        {
            if (menues.HasAny())
            {
                await _menues.AddRangeAsync(menues);
                await _unitOfWork.Commit();
            }
        }

        public async Task UpdateMenuAsync(Menu[]? menues = null)
        {
            if (menues.HasAny())
            {
                _menues.UpdateRange(menues!);
                await _unitOfWork.Commit();
            }
        }

        public async Task RemoveAsync(Guid[]? ids)
        {
            if (!ids.HasAny())
                return;
            var items = _menues.IgnoreQueryFilters().Where(x => ids!.Contains(x.Id)).ToArray();
            if (items.HasAny())
            {
                _menues.RemoveRange(items);
                await _unitOfWork.Commit();
            }
        }
    }
}
