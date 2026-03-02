using Blog.Core.Models.MicroBlogs;
using Blog.Domain.DataAccess.Projections;

using Domain.Core;

using static Blog.Core.ServiceProvider.InfosGetConverter;

namespace Blog.Core.ServiceProvider
{
    public class MicroBlogsGetConverter : IConverter<MicroBlogsResponseModel, MicroBlogProjection[]>
    {
        private readonly IConverter<MicroBlogResponseModel, MicroBlogProjection> _blogConverter;

        public MicroBlogsGetConverter()
        {
            _blogConverter = new MicroBlogGetConverter();
        }

        public MicroBlogsResponseModel From(MicroBlogProjection[] src)
        {
            return new MicroBlogsResponseModel(_blogConverter.From(src), src.Count());
        }

        public class MicroBlogGetConverter : IConverter<MicroBlogResponseModel, MicroBlogProjection>

        {
            public MicroBlogResponseModel From(MicroBlogProjection src)
            {
                return new MicroBlogResponseModel
                {
                    Id = src.Id,
                    IsActive = src.IsActive,
                    MenuId = src.MenuId,
                    MenuPosition = src.MenuPosition,
                    Infos = new InfoConverter().From(src.Infos)
                };
            }
        }
    }
}
