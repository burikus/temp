namespace IdentityService.Validators.Messages
{
    public class UserValidationMessages
    {
        public const string EmailInvalid = "Email is not valid.";
		public const string NameInvalid = $"Name length must be between {{MinLength}} and {{MaxLength}} chars.";
		public const string FamilyNameInvalid = $"Familyname length must be between {{MinLength}} and {{MaxLength}} chars.";
		public const string PasswordInvalid = $"Password length must be at least {{MinLength}} chars";		
	}
}
