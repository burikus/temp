using Domain.Enums;

namespace Stamp.Core.Models.StampTypes
{
    public record CreateStampTypesModel(CreateStampTypeModel[] Data);

    public record CreateStampTypeModel(StampCode StampCode, string Description, int Horizontal, int Vertical);
}
