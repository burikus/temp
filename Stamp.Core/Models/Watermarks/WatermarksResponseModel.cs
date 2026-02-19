using Domain.Enums;

namespace Stamp.Core.Models.Watermarks
{
    public record WatermarksResponseModel(WatermarkResponseModel[] Data, int TotalCount);

    public record WatermarkResponseModel(Guid Id, WatermarkCode Code, string? ImageFile, string Description);
}
