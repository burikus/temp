using Domain.Enums;

using Stamp.Domain.DataAccess.Entities;

namespace Stamp.Domain.DataAccess.Repositories
{
    public interface IPrintTypeRepository
    {
        Task CreateRangeAsync(PrintType[] papers);
        Task UpdateRangeAsync(PrintType[] papers);
        Task DeleteRangeAsync(PrintType[] papers);
        Task<PrintType[]> GetByIdsAsync(Guid[]? ids);
        Task<PrintType[]> GetByCodesAsync(PrintTypeCode[]? codes);
    }
}
