using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class PaperRepository : IPaperRepository
    {
        private readonly DbSet<Paper> _papers;
        private readonly IUnitOfWork _unitOfWork;

        public PaperRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _papers = context.Paper;
        }

        public async Task CreateRangeAsync(Paper[] papers)
        {
            await _papers.AddRangeAsync(papers);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Paper[] papers)
        {
            _papers.UpdateRange(papers);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Paper[] papers)
        {
            _papers.RemoveRange(papers);
            await _unitOfWork.Commit();
        }

        public async Task<Paper[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _papers.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<Paper>();
        }

        public async Task<Paper[]> GetByCodesAsync(PaperCode[]? codes)
        {
            return codes.HasAny()
                ? await _papers.Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<Paper>();
        }
    }
}
