using Domain.ApplicationSettings;
using Domain.CQRS;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.Validators
{
    public class CreateFeedbackMessageCommandValidator : BaseCommandValidator<CreateFeedbackMessageCommand>
    {
        public CreateFeedbackMessageCommandValidator(
            IAppConfiguration app,
            IReadonlyRepository<User> readonlyRepository
            ) : base(app)
        {
        }
    }
}
