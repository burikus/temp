namespace IdentityService.Messaging
{
    public record UserVerificationFailedMessage
    {
        public string Email { get; init; }
    }
}
