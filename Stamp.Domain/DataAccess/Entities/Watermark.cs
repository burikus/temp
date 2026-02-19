using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class Watermark
    {
        public Guid Id { get; set; }

        public WatermarkCode Code { get; set; }
        public byte[]? ImageFile { get; set; }
        public required string Description { get; set; }

        public virtual ICollection<StampInfo> Stamps { get; set; }
    }
}
