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
    public class RegisterNewUserCommandValidator : BaseCommandValidator<RegisterNewUserCommand>
    {
        private readonly IReadonlyRepository<User> _readonlyRepository;

        public RegisterNewUserCommandValidator(
            IAppConfiguration app,
            IReadonlyRepository<User> readonlyRepository
            ) : base(app)
        {
            _readonlyRepository = readonlyRepository ?? throw new ArgumentNullException(nameof(readonlyRepository));

            //RuleFor(x => x.Email)
            //    .MustAsync(IsUserActive)
            //    .WithMessage(UserValidationMessages.UserExists);

            //TODO add RoleName if needed
        }

        private async Task<bool> IsUserActive(string email, CancellationToken cancellationToken)
        {
            return await _readonlyRepository.Any(new UserSpecs.ByUserEmail(email))
                            .ConfigureAwait(false) == false;
        }
    }
}
