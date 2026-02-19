using Stamp.Core.Models.StampCatalogs;
using Stamp.Core.Models.StampInfos;

namespace Stamp.Core.Models.Pictures
{
    public record UpdatePicturesModel(UpdatePictureModel[] Data);

    public record UpdatePictureModel
    {
        public Guid Id { get; init; }

        public string? ImageFile { get; init; } = null;
        public string? Name { get; init; } = null;
        public string? Type { get; init; } = null;
        public long? Size { get; init; } = null;
        public int? ImageWidth { get; init; } = null;
        public int? ImageHeight { get; init; } = null;
        public Guid? StampTypeId { get; init; } = null;
        public Guid? CountryId { get; init; } = null;

        public UpdateStampInfoModel? StampInfo { get; init; } = null;
        public UpdateStampCatalogModel[]? StampCatalogs { get; init; } = null;
    }
}
