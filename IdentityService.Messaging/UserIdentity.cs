using System;

namespace IdentityService.Messaging
{
    public record UserIdentity
    {
        public Guid Uid { get; init; }
        public string Email { get; init; }
    }
}
