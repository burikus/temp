using Microsoft.AspNetCore.Identity;

namespace IdentityService.Options
{
    public class EmailConfirmationTokenProviderOptions : DataProtectionTokenProviderOptions
    {
        public const string SectionName = "EmailConfirmationTokenProviderOptions";
    }
}
