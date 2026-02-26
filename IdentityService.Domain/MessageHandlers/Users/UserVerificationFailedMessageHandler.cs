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
    public class UserVerificationFailedMessageHandler : IHandleMessages<UserVerificationFailedMessage>
    {
        private readonly IMediator _mediator;
        private readonly IReadonlyRepository<User> _repository;

        public UserVerificationFailedMessageHandler(
            IMediator mediator,
            IReadonlyRepository<User> repository)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        public async Task Handle(UserVerificationFailedMessage message)
        {
            var user = await _repository.GetSingle(new UserSpecs.ByUserEmail(message.Email));

            if (user != null)
            {
                await _mediator.Send(new UpdateUserStatusCommand
                {
                    Status = UserStatus.New,
                    UserUid = Guid.Parse(user.Id)
                }).ConfigureAwait(false);
            }
        }
    }
}
