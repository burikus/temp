using Blog.Core.Models.Infos;
using Blog.Domain.DataAccess.Projections;

using Domain.Core;

namespace Blog.Core.ServiceProvider
{
    public class InfosGetConverter : IConverter<InfosResponseModel, InfoProjection[]>
    {
        private readonly IConverter<InfoResponseModel, InfoProjection> _infoConverter;

        public InfosGetConverter()
        {
            _infoConverter = new InfoGetConverter();
        }

        public InfosResponseModel From(InfoProjection[] src)
        {
            return new InfosResponseModel(_infoConverter.From(src), src.Count());
        }

        public class InfoGetConverter : IConverter<InfoResponseModel, InfoProjection>
        {
            public InfoResponseModel From(InfoProjection src)
            {
                return new InfoResponseModel(src.Id, src.Text, src.IsActive, src.TextFormattingId);
            }
        }

        public class InfoConverter : IConverter<InfoResponseModel[], InfoProjection[]>
        {
            private readonly IConverter<InfoResponseModel, InfoProjection> _infoConverter;

            public InfoConverter()
            {
                _infoConverter = new InfoGetConverter();
            }

            public InfoResponseModel[] From(InfoProjection[] src)
            {
                return _infoConverter.From(src);
            }
        }
    }
}
