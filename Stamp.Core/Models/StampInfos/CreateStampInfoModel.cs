namespace Stamp.Core.Models.StampInfos
{
    public record CreateStampInfoModel
    {
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

        public int? Position { get; set; }
        public Guid? SubMenuId { get; set; }
        public int? SubMenuPosition { get; set; }

        public Guid? WatermarkId { get; init; }
        public Guid? RasterId { get; init; }
        public Guid? PerforationId { get; init; }
        public Guid? PrintTypeId { get; init; }
        public Guid? PaperId { get; init; }
        public Guid? StampSeriesId { get; init; }
        public Guid? ThemeId { get; init; }
    }
}
