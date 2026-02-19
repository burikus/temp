using Domain.Enums;

namespace Stamp.Core.Models.Papers
{
    public record UpdatePapersModel(UpdatePaperModel[] Data);

    public record UpdatePaperModel(Guid Id, PaperCode? Code = null, string? ImageFile = null, string? Description = null);
}
