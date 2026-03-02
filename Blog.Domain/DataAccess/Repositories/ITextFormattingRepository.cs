using Blog.Domain.DataAccess.Entities;

namespace Blog.Domain.DataAccess.Repositories
{
    public interface ITextFormattingRepository
    {
        Task<TextFormatting[]> GetAll();
        Task UpdateRangeAsync(TextFormatting[] formattings);
    }
}
