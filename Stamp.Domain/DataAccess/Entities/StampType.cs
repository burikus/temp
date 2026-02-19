using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class StampType
    {
        public Guid Id { get; set; }

        public StampCode StampCode { get; set; }
        public required string Description { get; set; }
        public int Horizontal { get; set; } = 1;
        public int Vertical { get; set; } = 1;

        public virtual ICollection<Picture> Pictures { get; set; }
    }
}
