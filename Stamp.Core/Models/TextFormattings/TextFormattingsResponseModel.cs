using Domain.Enums;

namespace Stamp.Core.Models.TextFormattings
{
    public record TextFormattingsResponseModel(TextFormattingResponseModel[] Data, int TotalCount);

    public record TextFormattingResponseModel
    {
        public Guid Id { get; init; }
        public string? Font { get; init; }
        public string? Size { get; init; }
        public string? Color { get; init; }
        public string? Style { get; init; }
        public string? Weight { get; init; }
        public string? StrokeUnderline { get; init; }
        public string? Align { get; init; }
        public TextType TextType { get; init; }
    }
}
