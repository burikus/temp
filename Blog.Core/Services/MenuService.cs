using Blog.Core.Models.Menues;
using Blog.Core.ServiceProvider;
using Blog.Core.Services.Contracts;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Queries.Contracts;
using Blog.Domain.DataAccess.Repositories;

using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

namespace Blog.Core.Services
{
    public class MenuService : IMenuService
    {
        private readonly IMenuQuery _menuQuery;
        private readonly IMenuRepository _menuRepository;
        private readonly ISwipperRepository _swipperRepository;
        private readonly IMicroBlogRepository _microBlogRepository;

        public MenuService(
            IMenuQuery menuQuery,
            IMenuRepository menuRepository,
            ISwipperRepository swipperRepository,
            IMicroBlogRepository microBlogRepository)
        {
            _menuQuery = SystemObjects.RequireNotNull(menuQuery, nameof(menuQuery));
            _menuRepository = SystemObjects.RequireNotNull(menuRepository, nameof(menuRepository));
            _swipperRepository = swipperRepository;
            _microBlogRepository = microBlogRepository;
        }

        public async Task<Result<MenuResponseModel>> AllMenuesAsync(bool isAdmin)
        {
            var result = await _menuQuery.AllMenuesAsync(isAdmin);

            return Result<MenuResponseModel>.Ok(new MenuGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateMenuesAsync(MenuUpdateModel model)
        {
            var curItems = await _menuRepository.AllAsync(true);

            if (!model.Items.HasAny() && curItems.HasAny())
            {
                await _menuRepository.RemoveAsync(curItems.Select(x => x.Id).ToArray());
                return Result<string>.Ok("Меню обновлено.");
            }

            var toRemove = curItems?.Where(x => !model.Items.Select(y => y.Id).Contains(x.Id)).ToArray() ?? Array.Empty<Menu>();
            var toUpdate = curItems?.Where(x => model.Items.Select(y => y.Id).Contains(x.Id)).ToArray() ?? Array.Empty<Menu>();
            var newMenues = !curItems.HasAny()
                ? model.Items
                : model.Items.Where(x => !(toRemove.Concat(toUpdate)).Select(y => y.Id).Contains(x.Id)).ToArray();

            if (toRemove.HasAny())
            {
                var removeMenuIds = toRemove.Select(x => x.Id).ToList();

                var swippersToUpdate = curItems!
                    .Where(x => x.Swipper != null && x.Swipper.MenuId.HasValue && removeMenuIds.Contains(x.Swipper.MenuId.Value))
                    .Select(x => x.Swipper).ToArray();
                if (swippersToUpdate.HasAny())
                {
                    foreach (var swipper in swippersToUpdate)
                    {
                        swipper.MenuId = null;
                    }
                    await _swipperRepository.UpdateRangeAsync(swippersToUpdate);
                }

                var blogsToUpdate = curItems!.SelectMany(x => x.Blogs.Where(y => y.MenuId.HasValue && curItems!.Select(x => x.Id).Contains(y.MenuId.Value))).ToArray();
                if (blogsToUpdate.HasAny())
                {
                    foreach (var blog in blogsToUpdate)
                    {
                        blog.MenuId = null;
                    }
                    await _microBlogRepository.UpdateMicroBlogsAsync(blogsToUpdate);
                }

                await _menuRepository.RemoveAsync(removeMenuIds.ToArray());
            }

            if (toUpdate.HasAny())
            {
                foreach (var item in toUpdate)
                {
                    var current = model.Items.Where(x => x.Id == item.Id).FirstOrDefault();
                    if (current == null)
                        continue;

                    item.IsActive = current.IsActive;
                    item.Name = current.Name;
                    item.Position = current.Position;
                    item.TextFormattingId = current.TextFormattingId;
                }

                await _menuRepository.UpdateMenuAsync(toUpdate);
            }

            if (newMenues.HasAny())
            {
                var items = newMenues
                .Select(x =>
                 new Menu
                 {
                     Id = x.Id,
                     Name = x.Name,
                     IsActive = x.IsActive,
                     Position = x.Position,
                     TextFormattingId = x.TextFormattingId
                 }
                 ).ToArray();

                await _menuRepository.AddMenuAsync(items);
            }

            return Result<string>.Ok("Меню обновлено.");
        }
    }
}
