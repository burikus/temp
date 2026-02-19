using Domain.Enums;

namespace Stamp.Core.Models.Pictures
{
    public record GetFilteredPicturesModel
    {
        public int[]? IssueYears { get; init; }
        public StampCode[]? StampCodes { get; init; }
        public Guid? SubMenuId { get; init; }
    }
}
