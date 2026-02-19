using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class Paper
    {
        public Guid Id { get; set; }

        public PaperCode Code { get; set; }
        public byte[]? ImageFile { get; set; }
        public required string Description { get; set; }

        public virtual ICollection<StampInfo> Stamps { get; set; }
    }
}
