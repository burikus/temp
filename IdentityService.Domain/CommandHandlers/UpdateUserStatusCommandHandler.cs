using Domain.Core;
using Domain.CQRS;
using Domain.DataAccess.UnitOfWork;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;

namespace IdentityService.Domain.CommandHandlers
{
    public class UpdateUserStatusCommandHandler : CommandHandlerBase<UpdateUserStatusCommand, UpdateCommandResult>
    {
        private readonly IWriteonlyRepository<User> _repository;
        private readonly IDateTimeProvider _dateTimeProvider;

        protected UpdateUserStatusCommandHandler(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IWriteonlyRepository<User> repository,
            IDateTimeProvider dateTimeProvider
            ) : base(unitOfWork, mapper)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
        }

        protected override async Task<UpdateCommandResult> ProcessCommandAsync(UpdateUserStatusCommand command, CancellationToken cancellationToken)
        {
            var user = await _repository.GetSingle(new UserSpecs.ByUid(command.UserUid));

            if (user != null)
            {
                user.Active = command.Status == UserStatus.Active ? true : user.Active;
                user.CreationEmailConfirmationLinkDate = command.Status == UserStatus.InvitationSent ? _dateTimeProvider.UtcNow : user.CreationEmailConfirmationLinkDate;
                await _repository.Update(user);

                return new UpdateCommandResult
                {
                    Uid = Guid.Parse(user.Id),
                    IsSucceed = true
                };
            }

            return new UpdateCommandResult
            {
                Uid = Guid.Empty,
                IsSucceed = false
            };
        }

        protected override Result<UpdateCommandResult> CreateResponse(UpdateCommandResult response)
        {
            return Result<UpdateCommandResult>.Ok(response);
        }
    }
}
