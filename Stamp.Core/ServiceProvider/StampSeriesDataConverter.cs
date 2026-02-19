using Domain.Core;

using Stamp.Core.Models.StampSeries;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class StampSeriesesGetConverter : IConverter<StampSeriesesResponseModel, StampSeriesProjection[]>
    {
        private readonly IConverter<StampSeriesResponseModel, StampSeriesProjection> _stampSeriesConverter;

        public StampSeriesesGetConverter()
        {
            _stampSeriesConverter = new StampSeriesGetConverter();
        }

        public StampSeriesesResponseModel From(StampSeriesProjection[] src)
        {
            return new StampSeriesesResponseModel(_stampSeriesConverter.From(src), src.Count());
        }

        public class StampSeriesGetConverter : IConverter<StampSeriesResponseModel, StampSeriesProjection>
        {
            public StampSeriesResponseModel From(StampSeriesProjection src)
            {
                return new StampSeriesResponseModel(src.Id, src.Text, src.Date.Date);
            }
        }
    }
}
