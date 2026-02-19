using Domain.Enums;

namespace Stamp.Core.Models.StampTypes
{
    public record UpdateStampTypesModel(UpdateStampTypeModel[] Data);

    public record UpdateStampTypeModel(Guid Id, StampCode? Code = null, string? Description = null, int? Horizontal = null, int? Vertical = null);
}
