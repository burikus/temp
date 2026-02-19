using Domain.Enums;

namespace Stamp.Core.Models.PrintTypes
{
    public record PrintTypesResponseModel(PrintTypeResponseModel[] Data, int TotalCount);

    public record PrintTypeResponseModel(Guid Id, PrintTypeCode Code, string? ImageFile, string Description);
}
