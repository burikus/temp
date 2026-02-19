namespace Stamp.Core.Models.StampInfos
{
    public record UpdateStampInfosModel(UpdateStampInfoModel[] Data);

    public record UpdateStampInfoModel
    {
        public Guid Id { get; init; }

        public string? Description { get; init; } = null;
        public DateTimeOffset? IssueDate { get; init; } = null;
        public string? Color { get; init; } = null;
        public string? Background { get; init; } = null;
        public bool? IsUV { get; init; } = null;
        public bool? IsForm2 { get; init; } = null;
        public string? Size { get; init; } = null;
        public int? PrintedCopies { get; init; } = null;
        public string? Designer { get; init; } = null;
        public string? LinkToCatalogEmitter { get; init; } = null;
        public bool? IsKindOf { get; init; } = null;
        public bool? IsDefect { get; init; } = null;
        public bool? IsAdditional { get; init; } = null;

        public int? Position { get; set; }
        public Guid? SubMenuId { get; set; }
        public int? SubMenuPosition { get; set; }

        public Guid? WatermarkId { get; init; } = null;
        public Guid? RasterId { get; init; } = null;
        public Guid? PerforationId { get; init; } = null;
        public Guid? PrintTypeId { get; init; } = null;
        public Guid? PaperId { get; init; } = null;
        public Guid? StampSeriesId { get; init; } = null;
        public Guid? ThemeId { get; init; } = null;
    }
}
