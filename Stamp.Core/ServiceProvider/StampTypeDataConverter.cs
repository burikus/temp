using Domain.Core;

using Stamp.Core.Models.StampTypes;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class StampTypesGetConverter : IConverter<StampTypesResponseModel, StampTypeProjection[]>
    {
        private readonly IConverter<StampTypeResponseModel, StampTypeProjection> _stampTypeConverter;

        public StampTypesGetConverter()
        {
            _stampTypeConverter = new StampTypeGetConverter();
        }

        public StampTypesResponseModel From(StampTypeProjection[] src)
        {
            return new StampTypesResponseModel(_stampTypeConverter.From(src), src.Count());
        }

        public class StampTypeGetConverter : IConverter<StampTypeResponseModel, StampTypeProjection>
        {
            public StampTypeResponseModel From(StampTypeProjection src)
            {
                return new StampTypeResponseModel(src.Id, src.StampCode, src.Description, src.Horizontal, src.Vertical);
            }
        }
    }
}
