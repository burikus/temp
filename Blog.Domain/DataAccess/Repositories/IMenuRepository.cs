using Blog.Domain.DataAccess.Entities;

namespace Blog.Domain.DataAccess.Repositories
{
    public interface IMenuRepository
    {
        Task<Menu[]> AllAsync(bool isAdmin = false);
        Task AddMenuAsync(Menu[] menues);
        Task UpdateMenuAsync(Menu[]? menues = null);
        Task RemoveAsync(Guid[]? ids);
    }
}
