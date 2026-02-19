using Domain.Enums;

namespace Stamp.Core.Models.TextFormattings
{
    public record UpdateTextFormattingsModel(UpdateTextFormattingModel[] Data);

    public record UpdateTextFormattingModel
    {
        public Guid Id { get; init; }
        public string? Font { get; init; } = null;
        public string? Size { get; init; } = null;
        public string? Color { get; init; } = null;
        public string? Style { get; init; } = null;
        public string? Weight { get; init; } = null;
        public string? StrokeUnderline { get; init; } = null;
        public string? Align { get; init; } = null;
        public TextType TextType { get; init; }
    }
}
