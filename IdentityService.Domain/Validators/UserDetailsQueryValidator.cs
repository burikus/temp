using Domain.Constants;
using Domain.Extensions;
using Domain.Interfaces.Repositories;

using FluentValidation;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Queries;
using IdentityService.Domain.Validators.Messages;

namespace IdentityService.Domain.Validators
{
    public class UserDetailsQueryValidator : AbstractValidator<UserCredentialsQuery>
    {
        private readonly IReadonlyRepository<User> _readonlyRepository;

        public UserDetailsQueryValidator(
            IReadonlyRepository<User> readonlyRepository
            )
        {
            _readonlyRepository = readonlyRepository ?? throw new ArgumentNullException(nameof(readonlyRepository));

            RuleFor(x => x)
                    .MustAsync(DoesUserExist)
                    .WithErrorCode(ValidationCodes.NotFound)
                    .WithMessage(UserValidationMessages.UserDoesNotExist);
        }

        private async Task<bool> DoesUserExist(UserCredentialsQuery userInfo, CancellationToken cancellationToken)
        {
            return await _readonlyRepository.Any(new UserSpecs.ByUserCredentials(userInfo.Email, userInfo.Password.ObjectToString()))
                            .ConfigureAwait(false);
        }
    }
}
