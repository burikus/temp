using Blog.Domain.DataAccess.Projections;
using Domain.Enums;

namespace Blog.Domain.DataAccess.Queries.Contracts
{
    public interface ITextFormattingQuery
    {
        Task<TextFormattingProjection[]> AllAsync();
        Task<TextFormattingProjection?> TextFormattingByFilterAsync(TextFormattingFilter filter);
    }
}
