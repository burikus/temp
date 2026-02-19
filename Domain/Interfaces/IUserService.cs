using Domain.Dtos;

namespace Domain.Interfaces
{
	public interface IUserService
	{
		Task<VerificationResultDto> GetUserUidsVerificationResultAsync(IEnumerable<Guid> userUids);
	}
}
