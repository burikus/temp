using Domain.Interfaces;

using Grpc.Core;

using IdentityService.Domain.Queries;
using IdentityService.Protos;

using MediatR;

namespace IdentityService.Services
{
    public class UserDataService : Protos.UserDataService.UserDataServiceBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public UserDataService(IMediator mediator, IMapper mapper)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public override async Task<UsersResponse> GetUserInfoByUid(UserByUidRequest request, ServerCallContext context)
        {
            var result = await _mediator.Send(new UserInfoQuery { Id = Guid.Parse(request.Uid), IsUserAdmin = request.IsAdmin }).ConfigureAwait(false);

            return _mapper.Map<UsersResponse>(result.Value);
        }
    }
}
