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
    public class UserVerificationExpiredMessageHandler : IHandleMessages<UserVerificationExpiredMessage>
    {
        private readonly IMediator _mediator;
        private readonly IReadonlyRepository<User> _repository;

        public UserVerificationExpiredMessageHandler(
            IMediator mediator,
            IReadonlyRepository<User> repository)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        public async Task Handle(UserVerificationExpiredMessage message)
        {
            var user = await _repository.GetSingle(new UserSpecs.ByUserEmail(message.Entity.Email));

            if (!user.Active)
            {
                await _mediator.Send(new UpdateUserStatusCommand
                {
                    Status = UserStatus.InvitationExpired,
                    UserId = Guid.Parse(user.Id)
                }).ConfigureAwait(false);
            }
        }
    }
}
