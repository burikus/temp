using Domain.Core;

using Stamp.Core.Models.TextFormattings;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class TextFormattingsGetConverter : IConverter<TextFormattingsResponseModel, TextFormattingProjection[]>
    {
        private readonly IConverter<TextFormattingResponseModel, TextFormattingProjection> _textFormattingConverter;

        public TextFormattingsGetConverter()
        {
            _textFormattingConverter = new TextFormattingGetConverter();
        }

        public TextFormattingsResponseModel From(TextFormattingProjection[] src)
        {
            return new TextFormattingsResponseModel(_textFormattingConverter.From(src), src.Count());
        }

        public class TextFormattingGetConverter : IConverter<TextFormattingResponseModel, TextFormattingProjection>
        {
            public TextFormattingResponseModel From(TextFormattingProjection src)
            {
                return new TextFormattingResponseModel
                {
                    Id = src.Id,
                    TextType = src.TextType,
                    Align = src.Align,
                    Color = src.Color,
                    Font = src.Font,
                    Size = src.Size,
                    StrokeUnderline = src.StrokeUnderline,
                    Style = src.Style,
                    Weight = src.Weight
                };
            }
        }
    }
}
