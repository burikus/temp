using Domain.Enums;

namespace Stamp.Core.Models.StampTypes
{
    public record StampTypesResponseModel(StampTypeResponseModel[] Data, int TotalCount);

    public record StampTypeResponseModel(Guid Id, StampCode Code, string Description, int Horizontal, int Vertical);
}
