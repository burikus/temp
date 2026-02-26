using Domain.CQRS;

using Microsoft.AspNetCore.Identity;

namespace IdentityService.Domain.CommandResults
{
    public record RegisterNewUserCommandResult : CreateCommandResult
    {
        public IdentityResult IdentityResult { get; init; }
    }
}
