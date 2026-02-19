using Domain.Enums;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class TextFormattingQuery : ITextFormattingQuery
    {
        private readonly IQueryable<TextFormatting> _formattings;

        public TextFormattingQuery(StampContext stampContext)
        {
            if (stampContext == null)
            {
                throw new ArgumentNullException(nameof(stampContext));
            }

            _formattings = stampContext.TextFormatting.AsNoTracking();
        }

        public async Task<TextFormattingProjection[]> AllAsync()
        {
            return await _formattings.Select(x =>
                new TextFormattingProjection
                {
                    Id = x.Id,
                    Font = x.Font,
                    Size = x.Size,
                    Align = x.Align,
                    Color = x.Color,
                    Style = x.Style,
                    Weight = x.Weight,
                    StrokeUnderline = x.StrokeUnderline,
                    TextType = x.TextType
                })
                .ToArrayAsync();
        }

        public  async Task<TextFormattingProjection?> TextFormattingByTextTypeAsync(TextType textType)
        {
            return await _formattings
                .Where(x => textType == x.TextType)
                .Select(x =>
                    new TextFormattingProjection
                    {
                        Id = x.Id,
                        Font = x.Font,
                        Size = x.Size,
                        Align = x.Align,
                        Color = x.Color,
                        Style = x.Style,
                        Weight = x.Weight,
                        StrokeUnderline = x.StrokeUnderline,
                        TextType = x.TextType
                    })
                .FirstOrDefaultAsync();
        }
    }
}
