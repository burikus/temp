using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class MenuRepository : IMenuRepository
    {
        private readonly DbSet<Menu> _menues;
        private readonly DbSet<SubMenu> _subMenues;
        private readonly StampContext _context;
        private readonly IUnitOfWork _unitOfWork;

        public MenuRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _context = context;
            _menues = context.Menu;
            _subMenues = context.SubMenu;
            _unitOfWork = unitOfWork;
        }

        public Task<Menu[]> AllAsync(bool isAdmin = false)
        {
            if (isAdmin)
            {
                return _menues.Include(x => x.SubMenues).IgnoreQueryFilters().ToArrayAsync();
            }

            return _menues.Include(x => x.SubMenues).ToArrayAsync();
        }

        public Task<SubMenu[]> AllSubmenuAsync(bool isAdmin = false)
        {
            if (isAdmin)
            {
                return _subMenues.IgnoreQueryFilters().ToArrayAsync();
            }

            return _subMenues.ToArrayAsync();
        }

        public async Task AddMenuAsync(Menu[] menues = null)
        {
            if (menues.HasAny())
            {
                await _menues.AddRangeAsync(menues);
                await _unitOfWork.Commit();
            }
        }

        public async Task RemoveAllAsync()
        {
            var items = _menues.Include(x => x.SubMenues).IgnoreQueryFilters().ToArray();
            if (items.HasAny())
            {
                _menues.RemoveRange(items);
                await _unitOfWork.Commit();
            }
        }
    }
}
