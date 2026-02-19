using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class Perforation
    {
        public Guid Id { get; set; }

        public PerforationCode Code { get; set; }
        public byte[]? ImageFile { get; set; }
        public required string Description { get; set; }

        public virtual ICollection<StampInfo> Stamps { get; set; }
    }
}
