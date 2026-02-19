using Domain.DataAccess;

namespace Stamp.Domain.DataAccess.Entities
{
    public class Picture : SoftDeletableEntityBase
    {
        public required byte[] ImageFile { get; set; }
        public required string Name { get; set; }
        public required string Type { get; set; }
        public long Size { get; set; }
        public int? ImageWidth { get; set; }
        public int? ImageHeight { get; set; }

        public Guid StampInfoId { get; set; }
        public Guid StampTypeId { get; set; }
        public Guid CountryId { get; set; }

        public virtual StampInfo StampInfo { get; set; }
        public virtual StampType StampType { get; set; }
        public virtual Country Country { get; set; }
        public virtual ICollection<StampCatalog> StampCatalogs { get; set; } = new List<StampCatalog>();
        public virtual ICollection<Favourite> Favourites { get; set; } = new List<Favourite>();
    }
}
