using Domain.Core;

using Stamp.Core.Models.Papers;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class PapersGetConverter : IConverter<PapersResponseModel, PaperProjection[]>
    {
        private readonly IConverter<PaperResponseModel, PaperProjection> _paperConverter;

        public PapersGetConverter()
        {
            _paperConverter = new PaperGetConverter();
        }

        public PapersResponseModel From(PaperProjection[] src)
        {
            return new PapersResponseModel(_paperConverter.From(src), src.Count());
        }

        public class PaperGetConverter : IConverter<PaperResponseModel, PaperProjection>
        {
            public PaperResponseModel From(PaperProjection src)
            {
                return new PaperResponseModel(src.Id, src.Code, src.ImageFile != null ? Convert.ToBase64String(src.ImageFile) : null, src.Description);
            }
        }
    }
}
