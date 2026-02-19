using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class Country
    {
        public Guid Id { get; set; }

        public CountryCode Code { get; set; }
        public required string Description { get; set; }

        public virtual ICollection<Picture> Pictures { get; set; }
    }
}
