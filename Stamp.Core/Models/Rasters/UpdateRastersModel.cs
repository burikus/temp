using Domain.Enums;

namespace Stamp.Core.Models.Rasters
{
    public record UpdateRastersModel(UpdateRasterModel[] Data);

    public record UpdateRasterModel(Guid Id, RasterCode? Code = null, string? ImageFile = null, string? Description = null);
}
