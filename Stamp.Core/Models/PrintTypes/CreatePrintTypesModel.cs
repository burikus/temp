using Domain.Enums;

namespace Stamp.Core.Models.PrintTypes
{
    public record CreatePrintTypesModel(CreatePrintTypeModel[] Data);

    public record CreatePrintTypeModel(PrintTypeCode Code, string? ImageFile, string Description);
}
