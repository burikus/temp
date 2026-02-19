using Domain.Core;
using Domain.Enums;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.DataAccess.Queries;
using Stamp.Core.Models.TextFormattings;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

using static Stamp.Core.ServiceProvider.TextFormattingsGetConverter;

namespace Stamp.Core.Services
{
    public class TextFormattingService : ITextFormattingService
    {
        private readonly ITextFormattingQuery _textFormattingQuery;
        private readonly ITextFormattingRepository _textFormattingRepository;

        public TextFormattingService(ITextFormattingQuery textFormattingQuery, ITextFormattingRepository textFormattingRepository)
        {
            _textFormattingQuery = SystemObjects.RequireNotNull(textFormattingQuery, nameof(textFormattingQuery));
            _textFormattingRepository = SystemObjects.RequireNotNull(textFormattingRepository, nameof(textFormattingRepository));
        }

        public async Task<Result<TextFormattingsResponseModel>> AllTextFormattingsAsync()
        {
            var result = await _textFormattingQuery.AllAsync();

            return Result<TextFormattingsResponseModel>.Ok(new TextFormattingsGetConverter().From(result));
        }

        public async Task<Result<TextFormattingResponseModel>> TextFormattingByTypeAsync(TextType textType)
        {
            var result = await _textFormattingQuery.TextFormattingByTextTypeAsync(textType);

            return Result<TextFormattingResponseModel>.Ok(new TextFormattingGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateTextFormattingsAsync(UpdateTextFormattingsModel model)
        {
            if (!model.Data.HasAny())
                return Result<string>.BadRequest("Шрифты для обновления не найдены.");

            var textFormattings = await _textFormattingRepository.GetAll();

            foreach (var textFormatting in textFormattings)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == textFormatting.Id && x.TextType == textFormatting.TextType);

                textFormatting.Font = current?.Font ?? textFormatting.Font;
                textFormatting.Size = current?.Size ?? textFormatting.Size;
                textFormatting.Color = current?.Color ?? textFormatting.Color;
                textFormatting.Style = current?.Style ?? textFormatting.Style;
                textFormatting.Weight = current?.Weight ?? textFormatting.Weight;
                textFormatting.StrokeUnderline = current?.StrokeUnderline ?? textFormatting.StrokeUnderline;
                textFormatting.Align = current?.Align ?? textFormatting.Align;
            }

            await _textFormattingRepository.UpdateRangeAsync(textFormattings);

            return Result<string>.Ok("Шрифты обновлены.");
        }
    }
}
