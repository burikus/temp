using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Projections;
using Blog.Domain.DataAccess.Queries;
using Blog.Domain.DataAccess.Queries.Contracts;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Queries
{
    public class TextFormattingQuery : ITextFormattingQuery
    {
        private readonly IQueryable<TextFormatting> _formattings;

        public TextFormattingQuery(BlogContext blogContext)
        {
            if (blogContext == null)
            {
                throw new ArgumentNullException(nameof(blogContext));
            }

            _formattings = blogContext.TextFormatting.AsNoTracking();
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

        public async Task<TextFormattingProjection?> TextFormattingByFilterAsync(TextFormattingFilter filter)
        {
            return await _formattings
                .Where(x => filter.TextType == x.TextType)
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
