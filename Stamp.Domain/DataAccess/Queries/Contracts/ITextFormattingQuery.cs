using Domain.Enums;

using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Domain.DataAccess.Queries.Contracts
{
    public interface ITextFormattingQuery
    {
        Task<TextFormattingProjection[]> AllAsync();
        Task<TextFormattingProjection?> TextFormattingByTextTypeAsync(TextType textType);
    }
}
