using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Projections
{
    public record StampInfoProjection
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
        public PaperProjection? Paper { get; init; }
        public PerforationProjection? Perforation { get; init; }
        public PrintTypeProjection? PrintType { get; init; }
        public RasterProjection? Raster { get; init; }
        public StampSeriesProjection? StampSeries { get; init; }
        public ThemeProjection? Theme { get; init; }
        public WatermarkProjection? Watermark { get; init; }
    }
}