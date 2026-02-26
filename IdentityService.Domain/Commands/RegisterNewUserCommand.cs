using Domain.CQRS.Interfaces;

using IdentityService.Domain.CommandResults;

namespace IdentityService.Domain.Commands
{
    public record RegisterNewUserCommand : ICommand<RegisterNewUserCommandResult>
    {
        public string Name { get; init; }
        public string? FamilyName { get; init; }
        public string Email { get; init; }
        public string Password { get; init; }
        public string[] RoleNames { get; init; }
    }
}
