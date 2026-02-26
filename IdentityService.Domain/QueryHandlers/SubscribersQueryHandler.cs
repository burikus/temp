using Domain.Core;
using Domain.CQRS;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Queries;

namespace IdentityService.Domain.QueryHandlers
{
    public class SubscribersQueryHandler : QueryHandlerBase<SubscribersQuery, SubscribersDto>
    {
        private readonly IReadonlyRepository<User> _repository;
        private readonly IMapper _mapper;
        public SubscribersQueryHandler(
            IMapper mapper,
            IReadonlyRepository<User> repository
            ) : base(mapper)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        protected override async Task<Result<SubscribersDto>> ProcessRequestAsync(SubscribersQuery request, CancellationToken cancellationToken)
        {
            var subscribers = await _repository.GetByFilter(new UserSpecs.IsSubscribed()).ConfigureAwait(false);

            return Result<SubscribersDto>.Ok(new SubscribersDto() with { Subscribed = _mapper.Map<UserDetailDto[]>(subscribers) });
        }
    }
}
