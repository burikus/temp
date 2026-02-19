using Domain.DataAccess.UnitOfWork;
using Domain.Enums;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.DataAccess.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly DbSet<Country> _countries;
        private readonly IUnitOfWork _unitOfWork;

        public CountryRepository(StampContext context, IUnitOfWork unitOfWork)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }
            _unitOfWork = unitOfWork;
            _countries = context.Country;
        }

        public async Task CreateRangeAsync(Country[] countries)
        {
            await _countries.AddRangeAsync(countries);
            await _unitOfWork.Commit();
        }

        public async Task UpdateRangeAsync(Country[] countries)
        {
            _countries.UpdateRange(countries);
            await _unitOfWork.Commit();
        }

        public async Task DeleteRangeAsync(Country[] countries)
        {
            _countries.RemoveRange(countries);
            await _unitOfWork.Commit();
        }

        public async Task<Country[]> GetByIdsAsync(Guid[]? ids)
        {
            return ids.HasAny()
                ? await _countries.Where(x => ids!.Distinct().Contains(x.Id)).ToArrayAsync()
                : Array.Empty<Country>();
        }

        public async Task<Country[]> GetByCodesAsync(CountryCode[]? codes)
        {
            return codes.HasAny()
                ? await _countries.Where(x => codes!.Distinct().Contains(x.Code)).ToArrayAsync()
                : Array.Empty<Country>();
        }
    }
}
