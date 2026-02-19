using Domain.Enums;

namespace Stamp.Core.Models.PrintTypes
{
    public record UpdatePrintTypesModel(UpdatePrintTypeModel[] Data);

    public record UpdatePrintTypeModel(Guid Id, PrintTypeCode? Code = null, string? ImageFile = null, string? Description = null);
}
