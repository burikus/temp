using Domain.Enums;

namespace Stamp.Core.Models.Watermarks
{
    public record CreateWatermarksModel(CreateWatermarkModel[] Data);

    public record CreateWatermarkModel(WatermarkCode Code, string? ImageFile, string Description);
}
