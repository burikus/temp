using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class PrintTypeRepository : IPrintTypeRepository
    {
        private readonly DbSet<PrintType> _printTypes;
        private readonly IUnitOfWork _unitOfWork;

        public PrintTypeRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _printTypes = context.PrintType;
        }

        public async Task CreateRangeAsync(PrintType[] printTypes)
        {
            await _printTypes.AddRangeAsync(printTypes);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(PrintType[] printTypes)
        {
            _printTypes.UpdateRange(printTypes);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(PrintType[] printTypes)
        {
            _printTypes.RemoveRange(printTypes);
            await _unitOfWork.Commit();
        }

        public async Task<PrintType[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _printTypes.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<PrintType>();
        }

        public async Task<PrintType[]> GetByCodesAsync(PrintTypeCode[]? codes)
        {
            return codes.HasAny()
                ? await _printTypes.Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<PrintType>();
        }
    }
}
