using Stamp.Core.Models.StampCatalogs;
using Stamp.Core.Models.StampInfos;

namespace Stamp.Core.Models.Pictures
{
    public record CreatePicturesModel(CreatePictureModel[] Data);

    public record CreatePictureModel
    {
        public required string ImageFile { get; set; }
        public required string Name { get; init; }
        public required string Type { get; init; }
        public long Size { get; init; }
        public int? ImageWidth { get; set; }
        public int? ImageHeight { get; set; }

        public Guid StampInfoId { get; init; }
        public Guid StampTypeId { get; init; }
        public Guid CountryId { get; init; }

        public CreateStampInfoModel StampInfo { get; init; }
        public CreateStampCatalogModel[] StampCatalogs { get; init; }
    }
}
