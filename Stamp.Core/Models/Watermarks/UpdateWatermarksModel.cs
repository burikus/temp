using Domain.Enums;

namespace Stamp.Core.Models.Watermarks
{
    public record UpdateWatermarksModel(UpdateWatermarkModel[] Data);

    public record UpdateWatermarkModel(Guid Id, WatermarkCode? Code = null, string? ImageFile = null, string? Description = null);
}
