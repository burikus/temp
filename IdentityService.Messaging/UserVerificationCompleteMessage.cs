namespace IdentityService.Messaging
{
    public record UserVerificationCompleteMessage
    {
        public UserIdentity Entity { get; init; }
    }
}
