using Domain.Core;
using Domain.CQRS;
using Domain.Extensions;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.FetchStrategies;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Queries;

namespace IdentityService.Domain.QueryHandlers
{
    public class UserCredentialsQueryHandler : QueryHandlerBase<UserCredentialsQuery, UserDetailsDto>
    {
        private readonly IReadonlyRepository<User> _repository;

        public UserCredentialsQueryHandler(
            IMapper mapper,
            IReadonlyRepository<User> repository
            ) : base(mapper)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        protected override async Task<Result<UserDetailsDto>> ProcessRequestAsync(UserCredentialsQuery request, CancellationToken cancellationToken)
        {
            var userInfo = await _repository.GetSingle(new UserSpecs.ByUserCredentials(request.Email.Trim(), request.Password.Trim().ObjectToString()),
                                                        new[] { new UserJoinStrategies.WithUserRoles()/*.ThenInclude(new UserJoinStrategies.WithRole())*/ })
                                            .ConfigureAwait(false);

            return Result<UserDetailsDto>.Ok(Mapper.Map<UserDetailsDto>(userInfo));
        }
    }
}
