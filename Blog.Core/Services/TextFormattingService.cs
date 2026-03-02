using Blog.Core.Models.TextFormattings;
using Blog.Core.ServiceProvider;
using Blog.Core.Services.Contracts;
using Blog.Domain.DataAccess.Queries;
using Blog.Domain.DataAccess.Queries.Contracts;
using Blog.Domain.DataAccess.Repositories;

using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using static Blog.Core.ServiceProvider.TextFormattingsGetConverter;

namespace Blog.Core.Services
{
    public class TextFormattingService : ITextFormattingService
    {
        private readonly ITextFormattingQuery _formattingQuery;
        private readonly ITextFormattingRepository _formattingRepository;

        public TextFormattingService(ITextFormattingQuery formattingQuery, ITextFormattingRepository formattingRepository)
        {
            _formattingQuery = SystemObjects.RequireNotNull(formattingQuery, nameof(formattingQuery));
            _formattingRepository = SystemObjects.RequireNotNull(_formattingRepository, nameof(_formattingRepository));
        }

        public async Task<Result<TextFormattingsResponseModel>> AllTextFormattingAsync()
        {
            var result = await _formattingQuery.AllAsync();

            return Result<TextFormattingsResponseModel>.Ok(new TextFormattingsGetConverter().From(result));
        }

        public async Task<Result<TextFormattingResponseModel>> TextFormattingByFilterAsync(bool isAdmin, TextFormattingGetModel args)
        {
            var result = await _formattingQuery.TextFormattingByFilterAsync(new TextFormattingFilter(isAdmin, args.TextType));

            return Result<TextFormattingResponseModel>.Ok(new TextFormattingResponseGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateTextFormattingAsync(TextFormattingsUpdateModel model)
        {
            if (!model.IsAdmin)
                return Result<string>.BadRequest("Форматы не совсем найдены.");

            var formattings = await _formattingRepository.GetAll();
            if (!formattings.HasAny())
                return Result<string>.BadRequest("Форматы не найдены.");

            foreach (var formatting in formattings)
            {
                var current = model.Items.FirstOrDefault(x => x.Id == formatting.Id);
                if (current == null)
                    continue;

                formatting.Align = current.Align;
                formatting.Color = current.Color;
                formatting.Font = current.Font;
                formatting.Size = current.Size;
                formatting.StrokeUnderline = current.StrokeUnderline;
                formatting.Style = current.Style;
                formatting.TextType = current.TextType;
                formatting.Weight = current.Weight;
            }

            await _formattingRepository.UpdateRangeAsync(formattings);

            return Result<string>.Ok("Форматы обновлены.");
        }
    }
}
