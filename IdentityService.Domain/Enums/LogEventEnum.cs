namespace IdentityService.Domain.Enums
{
    public enum LogEventEnum
    {
        Created = 0,
        Deleted = 1,
        Login = 2,
        Logout = 3,
        PasswordResetRequested = 4,
        PasswordResetComplete = 5,
        PasswordResetError = 6,
        EmailConfirmationRequested = 7,
        EmailConfirmationComplete = 8
    }
}
