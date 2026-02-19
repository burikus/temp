using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class Catalog
    {
        public Guid Id { get; set; }

        public CatalogCode Code { get; set; }
        public required string Description { get; set; }

        public virtual ICollection<StampCatalog> CatalogStamps { get; set; }
    }
}
