using Domain.Dtos;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;

namespace IdentityService.Services
{
    public class UserQueriesAdapter : IUserService
	{
		private readonly IReadonlyRepository<User> _repository;

		public UserQueriesAdapter(IReadonlyRepository<User> repository)
		{
			_repository = repository ?? throw new ArgumentNullException(nameof(repository));
		}

		public async Task<VerificationResultDto> GetUserUidsVerificationResultAsync(IEnumerable<Guid> userUids)
		{
			var result = await _repository.CountByFilter(new UserSpecs.ByUids(userUids));

			return new VerificationResultDto { IsSuccess = result == userUids.Distinct().Count() };
		}
	}
}
