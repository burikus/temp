using Blog.Core.Models.TextFormattings;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Projections;

using Domain.Core;

namespace Blog.Core.ServiceProvider
{
    public class TextFormattingsGetConverter : IConverter<TextFormattingsResponseModel, TextFormattingProjection[]>
    {
        private readonly IConverter<TextFormattingResponseModel, TextFormattingProjection> _textFormattingResponseConverter;
        private readonly IConverter<TextFormatting, TextFormattingUpdateModel> _textFormattingConverter;

        public TextFormattingsGetConverter()
        {
            _textFormattingResponseConverter = new TextFormattingResponseGetConverter();
            _textFormattingConverter = new TextFormattingGetConverter();
        }

        public TextFormattingsResponseModel From(TextFormattingProjection[] src)
        {
            return new TextFormattingsResponseModel(_textFormattingResponseConverter.From(src));
        }

        public class TextFormattingResponseGetConverter : IConverter<TextFormattingResponseModel, TextFormattingProjection>
        {
            public TextFormattingResponseModel From(TextFormattingProjection src)
            {
                return new TextFormattingResponseModel
                {
                    Id = src.Id,
                    Align = src.Align,
                    Color = src.Color,
                    Font = src.Font,
                    Size = src.Size,
                    StrokeUnderline = src.StrokeUnderline,
                    Style = src.Style,
                    TextType = src.TextType,
                    Weight = src.Weight
                };
            }
        }

        public class TextFormattingGetConverter : IConverter<TextFormatting, TextFormattingUpdateModel>
        {          
            public TextFormatting From(TextFormattingUpdateModel src)
            {
                return new TextFormatting
                {
                    Id = src.Id,
                    Align = src.Align,
                    Color = src.Color,
                    Font = src.Font,
                    Size = src.Size,
                    StrokeUnderline = src.StrokeUnderline,
                    Style = src.Style,
                    TextType = src.TextType,
                    Weight = src.Weight
                };
            }
        }
    }
}
