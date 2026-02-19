using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface ITextFormattingRepository
    {
        Task<TextFormatting[]> GetAll();
        Task CreateRangeAsync(TextFormatting[] formattings);
        Task UpdateRangeAsync(TextFormatting[] formattings);
    }
}
