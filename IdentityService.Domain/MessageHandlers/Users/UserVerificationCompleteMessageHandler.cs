using Domain.Interfaces.Repositories;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Messaging;

using MediatR;

using Rebus.Handlers;

namespace IdentityService.Domain.MessageHandlers.Users
{
    public class UserVerificationCompleteMessageHandler : IHandleMessages<UserVerificationCompleteMessage>
    {
        private readonly IMediator _mediator;
        private readonly IReadonlyRepository<User> _repository;

        public UserVerificationCompleteMessageHandler(
            IMediator mediator,
            IReadonlyRepository<User> repository
            )
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        public async Task Handle(UserVerificationCompleteMessage message)
        {
            var user = await _repository.GetSingle(new UserSpecs.ByUserEmail(message.Entity.Email));

            if (user != null)
            {
                await _mediator.Send(new UpdateUserStatusCommand
                {
                    Status = UserStatus.Active,
                    UserId = Guid.Parse(user.Id)
                }).ConfigureAwait(false);
            }
        }
    }
}
