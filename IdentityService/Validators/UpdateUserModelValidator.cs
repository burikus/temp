using Domain.Extensions;
using IdentityService.Models;

using FluentValidation;

namespace IdentityService.Validators
{
    public class UpdateUserModelValidator : AbstractValidator<UpdateUserModel>
    {
        public UpdateUserModelValidator() : base()
        {           
            //When(x => !string.IsNullOrWhiteSpace(x.Email), () =>
            //    RuleFor(x => x.Email)
            //        .Must(IsEmailValid)
            //        .WithErrorCode(ValidationCodes.NotFound)
            //        .WithMessage(UserValidationMessages.EmailIsNotValid)
            //);
        }

        private bool IsEmailValid(string email)
        {
            return email.ValidateEmail();
        }
    }
}
