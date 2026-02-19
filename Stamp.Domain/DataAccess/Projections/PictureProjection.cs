namespace Stamp.Domain.DataAccess.Projections
{
    public record PictureProjection
    {
        public Guid Id { get; init; }

        public required byte[] ImageFile { get; init; }
        public required string Name { get; init; }
        public required string Type { get; init; }
        public long Size { get; init; }
        public int? ImageWidth { get; init; }
        public int? ImageHeight { get; init; }
        public CountryProjection Country { get; init; }
        public StampTypeProjection StampType { get; init; }
        public StampInfoProjection StampInfo { get; init; }
        public StampCatalogProjection[] StampCatalogs { get; init; }
    }
}
