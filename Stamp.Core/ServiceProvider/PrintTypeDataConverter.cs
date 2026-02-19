using Domain.Core;

using Stamp.Core.Models.PrintTypes;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class PrintTypesGetConverter : IConverter<PrintTypesResponseModel, PrintTypeProjection[]>
    {
        private readonly IConverter<PrintTypeResponseModel, PrintTypeProjection> _printTypeConverter;

        public PrintTypesGetConverter()
        {
            _printTypeConverter = new PrintTypeGetConverter();
        }

        public PrintTypesResponseModel From(PrintTypeProjection[] src)
        {
            return new PrintTypesResponseModel(_printTypeConverter.From(src), src.Count());
        }

        public class PrintTypeGetConverter : IConverter<PrintTypeResponseModel, PrintTypeProjection>
        {
            public PrintTypeResponseModel From(PrintTypeProjection src)
            {
                return new PrintTypeResponseModel(src.Id, src.Code, src.ImageFile != null ? Convert.ToBase64String(src.ImageFile) : null, src.Description);
            }
        }
    }
}
