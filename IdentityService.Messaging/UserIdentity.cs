using System;

namespace IdentityService.Messaging
{
    public record UserIdentity
    {
        public Guid Id { get; init; }
        public string Email { get; init; }
    }
}
