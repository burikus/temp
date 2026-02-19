using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Menues;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class MenuService : IMenuService
    {
        private readonly IMenuQuery _menuQuery;
        private readonly IMenuRepository _menuRepository;
        private readonly IStampInfoRepository _stampInfoRepository;

        public MenuService(IMenuQuery menuQuery, IMenuRepository menuRepository, IStampInfoRepository stampInfoRepository)
        {
            _menuQuery = SystemObjects.RequireNotNull(menuQuery, nameof(menuQuery));
            _menuRepository = SystemObjects.RequireNotNull(menuRepository, nameof(menuRepository));
            _stampInfoRepository = stampInfoRepository;
        }

        public async Task<Result<MenuResponseModel>> AllMenuesAsync(bool isAdmin)
        {
            var result = await _menuQuery.AllMenuesAsync(isAdmin);

            return Result<MenuResponseModel>.Ok(new MenuResponseModel(result));
        }

        public async Task<Result<string>> UpdateMenuesAsync(UpdateMenuModel model)
        {
            var curItems = await _menuRepository.AllAsync(true);

            if (curItems.HasAny())
            {
                var submenuesToDelete = model.Items.HasAny()
                ? curItems.SelectMany(x => x.SubMenues?.Select(y => y.Id)).Except(model.Items.SelectMany(x => x.SubMenues?.Select(y => y.Id))).ToArray()
                : curItems.SelectMany(x => x.SubMenues?.Select(y => y.Id)).ToArray();

                await _stampInfoRepository.UpdateSubMenuAsync(submenuesToDelete);

                await _menuRepository.RemoveAllAsync();
            }

            if (model.Items.HasAny())
            {
                var items = model.Items
                .Select(x =>
                 new Menu
                 {
                     Id = x.Id,
                     Name = x.Name,
                     IsActive = x.IsActive,
                     Position = x.Position,
                     SubMenues =
                        x.SubMenues.HasAny()
                         ? x.SubMenues!
                             .Select(y =>
                             new SubMenu
                             {
                                 Id = y.Id,
                                 MenuId = y.MenuId,
                                 Name = y.Name,
                                 IsActive = y.IsActive,
                                 Position = y.Position
                             }).ToArray()
                         : Array.Empty<SubMenu>()
                 }
                 ).ToArray();

                await _menuRepository.AddMenuAsync(items);
            }

            return Result<string>.Ok("Меню обновлено.");
        }
    }
}
