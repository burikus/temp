using Domain.Core;
using Domain.CQRS;
using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;

namespace IdentityService.Domain.CommandHandlers
{
    public class UpdateUserCommandHandler : CommandHandlerBase<UpdateUserCommand, UpdateCommandResult>
    {
        private readonly IWriteonlyRepository<User> _userWriteOnlyRepository;
        private readonly IDateTimeProvider _dateTimeProvider;

        public UpdateUserCommandHandler(
            IMapper mapper,
            IUnitOfWork unitOfWork,
            IWriteonlyRepository<User> userWriteOnlyRepository,
            IDateTimeProvider dateTimeProvider
            ) : base(unitOfWork, mapper)
        {
            _userWriteOnlyRepository = userWriteOnlyRepository ?? throw new ArgumentNullException(nameof(userWriteOnlyRepository));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
        }

        protected override async Task<UpdateCommandResult> ProcessCommandAsync(UpdateUserCommand command, CancellationToken cancellationToken)
        {
            var user = await _userWriteOnlyRepository.GetSingle(new UserSpecs.ByUid(command.Id))
                                .ConfigureAwait(false);

            user.UserName = command.Name;
            user.FamilyName = command.FamilyName;
            user.PasswordHash = string.IsNullOrEmpty(command.Password) ? user.PasswordHash : command.Password.ObjectToString();
            user.Active = command.Active ?? user.Active;
            user.PhoneNumber = command.Phone;
            user.Subscription = command.Subscription;
            user.Avatar = command.Avatar;

            await _userWriteOnlyRepository.Update(user)
                    .ConfigureAwait(false);

            return new UpdateCommandResult() { Id = Guid.Parse(user.Id), IsSucceed = true };
        }

        protected override Result<UpdateCommandResult> CreateResponse(UpdateCommandResult response)
        {
            return Result<UpdateCommandResult>.Created(response);
        }
    }
}
