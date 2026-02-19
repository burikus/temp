using Domain.Core;

using Stamp.Core.Models.Rasters;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class RastersGetConverter : IConverter<RastersResponseModel, RasterProjection[]>
    {
        private readonly IConverter<RasterResponseModel, RasterProjection> _rasterConverter;

        public RastersGetConverter()
        {
            _rasterConverter = new RasterGetConverter();
        }

        public RastersResponseModel From(RasterProjection[] src)
        {
            return new RastersResponseModel(_rasterConverter.From(src), src.Count());
        }

        public class RasterGetConverter : IConverter<RasterResponseModel, RasterProjection>
        {
            public RasterResponseModel From(RasterProjection src)
            {
                return new RasterResponseModel(src.Id, src.Code, src.ImageFile != null ? Convert.ToBase64String(src.ImageFile) : null, src.Description);
            }
        }
    }
}
