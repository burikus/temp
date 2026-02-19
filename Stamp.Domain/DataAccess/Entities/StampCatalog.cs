namespace Stamp.Domain.DataAccess.Entities
{
    public class StampCatalog
    {
        public Guid Id { get; set; }

        public required string CatalogNumber { get; set; }
        public Guid CatalogId { get; set; }

        public virtual Catalog Catalog { get; set; }
        public virtual ICollection<Picture> Pictures { get; set; }
    }
}
