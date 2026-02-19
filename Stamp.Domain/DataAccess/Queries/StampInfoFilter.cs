using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record StampInfoFilter
    {
        public Guid[]? Ids { get; init; } = null;
        public DateTimeOffset? IssueDateFrom { get; init; } = null;
        public DateTimeOffset? IssueDateTo { get; init; } = null;
        public bool? IsUV { get; init; } = null;
        public bool? IsForm2 { get; init; } = null;
        public int? PrintedCopiesMin { get; init; } = null;
        public int? PrintedCopiesMax { get; init; } = null;
        public string? Designer { get; init; } = null;
        public bool? IsKindOf { get; init; } = null;
        public bool? IsDefect { get; init; } = null;
        public bool? IsAdditional { get; init; } = null;
        public StampCode? StampCode { get; init; } = null;
        public Guid? SubMenuId { get; init; } = null;

        public Guid[]? PictureIds { get; init; } = null;
        public Guid[]? WatermarkIds { get; init; } = null;
        public Guid[]? RasterIds { get; init; } = null;
        public Guid[]? PerforationIds { get; init; } = null;
        public Guid[]? PrintTypeIds { get; init; } = null;
        public Guid[]? PaperIds { get; init; } = null;
        public Guid[]? ThemeIds { get; init; } = null;
    }
}
