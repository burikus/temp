using Stamp.Core.Models.Papers;
using Stamp.Core.Models.Perforations;
using Stamp.Core.Models.PrintTypes;
using Stamp.Core.Models.Rasters;
using Stamp.Core.Models.StampSeries;
using Stamp.Core.Models.Themes;
using Stamp.Core.Models.Watermarks;

namespace Stamp.Core.Models.StampInfos
{
    public record StampInfosResponseModel(StampInfoResponseModel[] Data, int TotalCount);

    public record StampInfoResponseModel
    {
        public Guid Id { get; init; }

        public required string Description { get; init; }
        public DateTimeOffset IssueDate { get; init; }
        public string? Color { get; init; }
        public string? Background { get; init; }
        public bool IsUV { get; init; }
        public bool IsForm2 { get; init; }
        public string? Size { get; init; }
        public int PrintedCopies { get; init; }
        public string? Designer { get; init; }
        public string? LinkToCatalogEmitter { get; init; }
        public bool IsKindOf { get; init; }
        public bool IsDefect { get; init; }
        public bool IsAdditional { get; init; }

        public int? Position { get; init; }
        public Guid? SubMenuId { get; init; }
        public int? SubMenuPosition { get; init; }

        public WatermarkResponseModel? Watermark { get; init; }
        public RasterResponseModel? Raster { get; init; }
        public PerforationResponseModel? Perforation { get; init; }
        public PrintTypeResponseModel? PrintType { get; init; }
        public PaperResponseModel? Paper { get; init; }
        public StampSeriesResponseModel? StampSeries { get; init; }
        public ThemeResponseModel? Theme { get; init; }
    }
}
