using Domain.Enums;

namespace Stamp.Core.Models.Papers
{
    public record CreatePapersModel(CreatePaperModel[] Data);

    public record CreatePaperModel(PaperCode Code, string? ImageFile, string Description);
}
