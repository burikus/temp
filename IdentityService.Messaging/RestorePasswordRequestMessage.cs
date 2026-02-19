namespace IdentityService.Messaging
{
    public record RestorePasswordRequestMessage
    {
        public UserIdentity Entity { get; init; }
    }
}
