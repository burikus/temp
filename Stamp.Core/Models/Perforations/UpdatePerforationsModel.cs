using Domain.Enums;

namespace Stamp.Core.Models.Perforations
{
    public record UpdatePerforationsModel(UpdatePerforationModel[] Data);

    public record UpdatePerforationModel(Guid Id, PerforationCode? Code = null, string? ImageFile = null, string? Description = null);
}
