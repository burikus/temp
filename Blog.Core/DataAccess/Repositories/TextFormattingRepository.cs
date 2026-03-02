using Blog.Core.DataAccess.EntityFramework;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Repositories;

using Domain.DataAccess.UnitOfWork;

using Microsoft.EntityFrameworkCore;

namespace Blog.Core.DataAccess.Repositories
{
    public class TextFormattingRepository : ITextFormattingRepository
    {
        private readonly DbSet<TextFormatting> _formatting;
        private readonly IUnitOfWork _unitOfWork;

        public TextFormattingRepository(BlogContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _formatting = context.TextFormatting;
            _unitOfWork = unitOfWork;
        }

        public Task<TextFormatting[]> GetAll()
        {
            return _formatting.ToArrayAsync();
        }

        public async Task UpdateRangeAsync(TextFormatting[] formattings)
        {
            _formatting.UpdateRange(formattings);

            await _unitOfWork.Commit();
        }
    }
}
