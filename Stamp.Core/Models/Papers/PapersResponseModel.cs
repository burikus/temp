using Domain.Enums;

namespace Stamp.Core.Models.Papers
{
    public record PapersResponseModel(PaperResponseModel[] Data, int TotalCount);

    public record PaperResponseModel(Guid Id, PaperCode Code, string? ImageFile, string Description);
}
