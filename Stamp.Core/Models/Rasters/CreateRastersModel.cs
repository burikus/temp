using Domain.Enums;

namespace Stamp.Core.Models.Rasters
{
    public record CreateRastersModel(CreateRasterModel[] Data);

    public record CreateRasterModel(RasterCode Code, string? ImageFile, string Description);
}
