using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IMenuRepository
    {
        Task<Menu[]> AllAsync(bool isAdmin = false);
        Task<SubMenu[]> AllSubmenuAsync(bool isAdmin = false);
        Task AddMenuAsync(Menu[] menues);
        Task RemoveAllAsync();
    }
}
