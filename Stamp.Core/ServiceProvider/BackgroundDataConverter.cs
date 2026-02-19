using Domain.Core;

using Stamp.Core.Models.Backgrounds;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class BackgroundsGetConverter : IConverter<BackgroundsResponseModel, BackgroundProjection[]>
    {
        private readonly IConverter<BackgroundResponseModel, BackgroundProjection> _backgrounConverter;

        public BackgroundsGetConverter()
        {
            _backgrounConverter = new BackgroundGetConverter();
        }

        public BackgroundsResponseModel From(BackgroundProjection[] src)
        {
            return new BackgroundsResponseModel(_backgrounConverter.From(src), src.Count());
        }

        public class BackgroundGetConverter : IConverter<BackgroundResponseModel, BackgroundProjection>
        {
            public BackgroundResponseModel From(BackgroundProjection src)
            {
                return new BackgroundResponseModel(src.Id, Convert.ToBase64String(src.Image), src.IsActive, src.Number, src.Name, src.imageMaxSize);
            }
        }
    }
}
