using Domain.Enums;

namespace Stamp.Core.Models.Perforations
{
    public record PerforationsResponseModel(PerforationResponseModel[] Data, int TotalCount);

    public record PerforationResponseModel(Guid Id, PerforationCode Code, string? ImageFile, string Description);
}
