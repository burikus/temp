using Domain.Extensions;

using FluentValidation;

using IdentityService.Models;
using IdentityService.Validators.Messages;

namespace IdentityService.Validators
{
    public class RegisterModelValidator : AbstractValidator<RegisterModel>
    {
        public RegisterModelValidator() : base()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .Length(1, 120)
                .WithMessage(UserValidationMessages.NameInvalid);

            When(x => !string.IsNullOrEmpty(x.FamilyName), () =>
                RuleFor(x => x.FamilyName)
                    .Length(1, 120)
                    .WithMessage(UserValidationMessages.FamilyNameInvalid));

            RuleFor(x => x.Email)
                .Must(EmailValid)
                .WithMessage(UserValidationMessages.EmailInvalid);

            RuleFor(x => x.Password)
                .NotEmpty()
                .MinimumLength(8)
                .WithMessage(UserValidationMessages.PasswordInvalid);
        }

        private bool EmailValid(string email)
        {
            return email.ValidateEmail();
        }
    }
}
