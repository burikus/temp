using Domain.DataAccess.UnitOfWork;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class TextFormattingRepository : ITextFormattingRepository
    {
        private readonly DbSet<TextFormatting> _formatting;
        private readonly IUnitOfWork _unitOfWork;

        public TextFormattingRepository(StampContext context, IUnitOfWork unitOfWork)
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

        public async Task CreateRangeAsync(TextFormatting[] formattings)
        {
            await _formatting.AddRangeAsync(formattings);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(TextFormatting[] formattings)
        {
            _formatting.UpdateRange(formattings);

            await _unitOfWork.Commit();
        }
    }
}
