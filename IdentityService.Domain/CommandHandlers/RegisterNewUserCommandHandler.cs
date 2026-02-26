using Domain.Core;
using Domain.CQRS;
using Domain.DataAccess.UnitOfWork;
using Domain.Extensions;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.CommandResults;
using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;

using Microsoft.AspNetCore.Identity;

namespace IdentityService.Domain.CommandHandlers
{
    public class RegisterNewUserCommandHandler : CommandHandlerBase<RegisterNewUserCommand, RegisterNewUserCommandResult>
    {
        private readonly IWriteonlyRepository<User> _userWriteOnlyRepository;
        private readonly IDateTimeProvider _dateTimeProvider;

        public RegisterNewUserCommandHandler(
            IMapper mapper,
            IUnitOfWork unitOfWork,
            IWriteonlyRepository<User> userWriteOnlyRepository,
            IDateTimeProvider dateTimeProvider
            ) : base(unitOfWork, mapper)
        {
            _userWriteOnlyRepository = userWriteOnlyRepository ?? throw new ArgumentNullException(nameof(userWriteOnlyRepository));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
        }

        protected override async Task<RegisterNewUserCommandResult> ProcessCommandAsync(RegisterNewUserCommand command, CancellationToken cancellationToken)
        {
            var userExist = await _userWriteOnlyRepository.GetSingle(new UserSpecs.ByUserEmail(command.Email)).ConfigureAwait(false); ;

            if (userExist == null)
            {
                var user = new User
                {
                    Id = Guid.NewGuid().ToString(),
                    UserName = command.Name.Trim(),
                    NormalizedUserName = command.Name.Trim().ToUpper(),
                    PasswordHash = command.Password.Trim().ObjectToString(),
                    FamilyName = command.FamilyName?.Trim(),
                    Email = command.Email.Trim(),
                    NormalizedEmail = command.Email.Trim().ToUpper(),
                    CreatedDate = _dateTimeProvider.UtcNow,
                    Active = false,
                    LastSuccessfulLogin = _dateTimeProvider.UtcNow,
                    FullName = $"{command.Name.Trim()} {command.FamilyName?.Trim()}"
                };

                await _userWriteOnlyRepository.Add(user).ConfigureAwait(false);

                return new RegisterNewUserCommandResult { Uid = Guid.Parse(user.Id), IdentityResult = IdentityResult.Success };
            }

            if(userExist != null && !userExist.Active && userExist.EmailConfirmationExpired)
            {
                userExist.UserName = command.Name.Trim();
                userExist.NormalizedUserName = command.Name.Trim().ToUpper();
                userExist.PasswordHash = command.Password.Trim().ObjectToString();
                userExist.FamilyName = command.FamilyName?.Trim();
                userExist.Email = command.Email.Trim();
                userExist.NormalizedEmail = command.Email.Trim().ToUpper();
                userExist.CreatedDate = _dateTimeProvider.UtcNow;
                userExist.LastSuccessfulLogin = _dateTimeProvider.UtcNow;
                userExist.FullName = $"{command.Name.Trim()} {command.FamilyName?.Trim()}";
                userExist.EmailConfirmationExpired = false;

                await _userWriteOnlyRepository.Update(userExist).ConfigureAwait(false);

                return new RegisterNewUserCommandResult { Uid = Guid.Parse(userExist.Id), IdentityResult = IdentityResult.Success };
            }

            return new RegisterNewUserCommandResult { Uid = userExist == null ? (Guid?)null : Guid.Parse(userExist.Id), IdentityResult = IdentityResult.Failed() };
        }

        protected override Result<RegisterNewUserCommandResult> CreateResponse(RegisterNewUserCommandResult response)
        {
            return Result<RegisterNewUserCommandResult>.Created(response);
        }
    }
}
