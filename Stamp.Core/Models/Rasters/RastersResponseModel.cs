using Domain.Enums;

namespace Stamp.Core.Models.Rasters
{
    public record RastersResponseModel(RasterResponseModel[] Data, int TotalCount);

    public record RasterResponseModel(Guid Id, RasterCode Code, string? ImageFile, string Description);
}
