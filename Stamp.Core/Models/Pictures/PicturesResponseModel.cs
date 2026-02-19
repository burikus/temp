using Stamp.Core.Models.Countries;
using Stamp.Core.Models.StampCatalogs;
using Stamp.Core.Models.StampInfos;
using Stamp.Core.Models.StampTypes;

namespace Stamp.Core.Models.Pictures
{
    public record PicturesResponseModel(PictureResponseModel[] Data, int TotalCount);

    public record PictureResponseModel
    {
        public Guid Id { get; init; }

        public required string? ImageFile { get; init; }
        public required string Name { get; init; }
        public required string Type { get; init; }
        public long Size { get; init; }
        public int? ImageWidth { get; init; }
        public int? ImageHeight { get; init; }
        public CountryResponseModel Country { get; init; }
        public StampTypeResponseModel StampType { get; init; }
        public StampInfoResponseModel StampInfo { get; init; }
        public StampCatalogResponseModel[] StampCatalogs { get; init; }
    }
}
