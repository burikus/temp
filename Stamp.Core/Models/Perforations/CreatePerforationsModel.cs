using Domain.Enums;

namespace Stamp.Core.Models.Perforations
{
    public record CreatePerforationsModel(CreatePerforationModel[] Data);

    public record CreatePerforationModel(PerforationCode Code, string? ImageFile, string Description);
}
