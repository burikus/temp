using Blog.Core.Models.Menues;
using Blog.Domain.DataAccess.Projections;

using Domain.Core;

namespace Blog.Core.ServiceProvider
{
    public class MenuGetConverter : IConverter<MenuResponseModel, MenuProjection[]>
    {
        private readonly IConverter<MenuModel, MenuProjection> _menuConverter;

        public MenuGetConverter()
        {
            _menuConverter = new MenuConverter();
        }

        public MenuResponseModel From(MenuProjection[] src)
        {
            return new MenuResponseModel(_menuConverter.From(src));
        }

        public class MenuConverter : IConverter<MenuModel, MenuProjection>
        {
            public MenuModel From(MenuProjection src)
            {
                return new MenuModel(src.Id, src.Name, src.IsActive, src.Position, src.TextFormattingId);
            }
        }
    }
}
