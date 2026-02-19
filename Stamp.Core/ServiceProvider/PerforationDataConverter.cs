using Domain.Core;

using Stamp.Core.Models.Perforations;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class PerforationsGetConverter : IConverter<PerforationsResponseModel, PerforationProjection[]>
    {
        private readonly IConverter<PerforationResponseModel, PerforationProjection> _perforationConverter;

        public PerforationsGetConverter()
        {
            _perforationConverter = new PerforationGetConverter();
        }

        public PerforationsResponseModel From(PerforationProjection[] src)
        {
            return new PerforationsResponseModel(_perforationConverter.From(src), src.Count());
        }

        public class PerforationGetConverter : IConverter<PerforationResponseModel, PerforationProjection>
        {
            public PerforationResponseModel From(PerforationProjection src)
            {
                return new PerforationResponseModel(src.Id, src.Code, src.ImageFile != null ? Convert.ToBase64String(src.ImageFile) : null, src.Description);
            }
        }
    }
}
