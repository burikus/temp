using Domain.ApplicationSettings;
using Domain.Constants;
using Domain.CQRS.Messages;
using Domain.Enums;

using FluentValidation;

namespace Domain.CQRS
{
    public class BaseCommandValidator<T> : AbstractValidator<T>
        where T : class
    {
        public BaseCommandValidator(IAppConfiguration app)
        {
            app = app ?? throw new ArgumentNullException(nameof(app));

            RuleFor(command => command)
                .Must(_ => app.GetMode() == AppMode.ReadWrite)
                .WithMessage(ValidationMessages.ReadOnlyMessage)
                .WithErrorCode(ValidationCodes.NotAllowed);
        }
    }
}
