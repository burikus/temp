using Domain.Core;

using Stamp.Core.Models.Watermarks;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class WatermarksGetConverter : IConverter<WatermarksResponseModel, WatermarkProjection[]>
    {
        private readonly IConverter<WatermarkResponseModel, WatermarkProjection> _watermarkConverter;

        public WatermarksGetConverter()
        {
            _watermarkConverter = new WatermarkGetConverter();
        }

        public WatermarksResponseModel From(WatermarkProjection[] src)
        {
            return new WatermarksResponseModel(_watermarkConverter.From(src), src.Count());
        }

        public class WatermarkGetConverter : IConverter<WatermarkResponseModel, WatermarkProjection>
        {
            public WatermarkResponseModel From(WatermarkProjection src)
            {
                return new WatermarkResponseModel(src.Id, src.Code, src.ImageFile != null ? Convert.ToBase64String(src.ImageFile) : null, src.Description);
            }
        }
    }
}
