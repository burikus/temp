namespace IdentityService.Messaging
{
    public record UserVerificationRequestMessage
    {
        public UserIdentity Entity { get; init; }
    }
}
