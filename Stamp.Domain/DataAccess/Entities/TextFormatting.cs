using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class TextFormatting
    {
        public Guid Id { get; set; }
        public string Font { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public string? Style { get; set; }
        public string? Weight { get; set; }
        public string? StrokeUnderline { get; set; }
        public string? Align { get; set; }
        public TextType TextType { get; set; }
    }
}
