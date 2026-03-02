using Blog.Core.Models.Infos;
using Blog.Domain.DataAccess.Projections;
using Domain.Core;

namespace Blog.Core.ServiceProvider
{
    public class SwippersGetConverter : IConverter<SwippersResponseModel, SwipperProjection[]>
    {
        private readonly IConverter<SwipperResponseModel, SwipperProjection> _swipperConverter;

        public SwippersGetConverter()
        {
            _swipperConverter = new SwipperGetConverter();
        }

        public SwippersResponseModel From(SwipperProjection[] src)
        {
            return new SwippersResponseModel(_swipperConverter.From(src), src.Count());
        }

        public class SwipperGetConverter : IConverter<SwipperResponseModel, SwipperProjection>
        {
            public SwipperResponseModel From(SwipperProjection src)
            {
                return new SwipperResponseModel(src.Id, Convert.ToBase64String(src.Image), src.IsActive, src.MenuId);
            }
        }
    }
}
