namespace IdentityService.Messaging
{
    public record UserVerificationExpiredMessage
    {
        public UserIdentity Entity { get; init; }
    }
}
