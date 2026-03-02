using Domain.Core;
using Domain.CQRS;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.FetchStrategies;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Queries;

namespace IdentityService.Domain.QueryHandlers
{
    public class UserInfoQueryHandler : QueryHandlerBase<UserInfoQuery, UserDetailsDto[]>
    {
        private readonly IReadonlyRepository<User> _repository;

        public UserInfoQueryHandler(
            IMapper mapper,
            IReadonlyRepository<User> repository
            ) : base(mapper)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        protected override async Task<Result<UserDetailsDto[]>> ProcessRequestAsync(UserInfoQuery request, CancellationToken cancellationToken)
        {
            var userInfo = request.IsUserAdmin
                ? await _repository.GetAll(new UserSortingSpecs.ByName(),
                            new[] { new UserJoinStrategies.WithUserRoles()/*.ThenInclude(new UserJoinStrategies.WithRole())*/ }, request.IsUserAdmin)
                            .ConfigureAwait(false)
                : await _repository.GetByFilter(new UserSpecs.ByUid(request.Id))
                            .ConfigureAwait(false);

            if (request.IsUserAdmin)
            {
                userInfo = userInfo.OrderBy(x => x.Id != request.Id.ToString()).ToArray();
            }

            return Result<UserDetailsDto[]>.Ok(Mapper.Map<UserDetailsDto[]>(userInfo));
        }
    }
}
