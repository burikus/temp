using Domain.DataAccess;

namespace Stamp.Domain.DataAccess.Entities
{
    public class StampInfo : SoftDeletableEntityBase
    {
        public required string Description { get; set; }
        public DateTimeOffset IssueDate { get; set; }
        public string? Color { get; set; }
        public string? Background { get; set; }
        public bool IsUV { get; set; }
        public bool IsForm2 { get; set; }
        public string? Size { get; set; }
        public int PrintedCopies { get; set; }
        public string? Designer { get; set; }
        public string? LinkToCatalogEmitter { get; set; }
        public bool IsKindOf { get; set; }
        public bool IsDefect { get; set; }
        public bool IsAdditional { get; set; }

        public int? Position { get; set; }
        public Guid? SubMenuId { get; set; }
        public int? SubMenuPosition { get; set; }

        public Guid PictureId { get; set; }

        public Guid? WatermarkId { get; set; }
        public Guid? RasterId { get; set; }
        public Guid? PerforationId { get; set; }
        public Guid? PrintTypeId { get; set; }
        public Guid? PaperId { get; set; }
        public Guid? StampSeriesId { get; set; }
        public Guid? ThemeId { get; set; }

        public virtual Watermark Watermark { get; set; }
        public virtual Raster Raster { get; set; }
        public virtual Perforation Perforation { get; set; }
        public virtual PrintType PrintType { get; set; }
        public virtual Paper Paper { get; set; }
        public virtual StampSeries StampSeries { get; set; }
        public virtual Theme Theme { get; set; }
        public virtual Picture Picture { get; set; }
    }
}
