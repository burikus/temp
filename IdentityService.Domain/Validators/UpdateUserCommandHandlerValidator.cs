using Domain.ApplicationSettings;
using Domain.CQRS;
using Domain.Interfaces.Repositories;

using FluentValidation;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Validators.Messages;

namespace IdentityService.Domain.Validators
{
    public class UpdateUserCommandHandlerValidator : BaseCommandValidator<UpdateUserCommand>
    {
        private readonly IReadonlyRepository<User> _readonlyRepository;

        public UpdateUserCommandHandlerValidator(
            IAppConfiguration app,
            IReadonlyRepository<User> readonlyRepository
            ) : base(app)
        {
            _readonlyRepository = readonlyRepository ?? throw new ArgumentNullException(nameof(readonlyRepository));

            RuleFor(x => x.Uid)
                 .MustAsync(DoesUserExist)
                 .WithMessage(UserValidationMessages.UserDoesNotExist);
            //TODO add RoleName if needed
        }

        private async Task<bool> DoesUserExist(Guid userUid, CancellationToken cancellationToken)
        {
            return await _readonlyRepository.Any(new UserSpecs.ByUid (userUid));
        }
    }
}
