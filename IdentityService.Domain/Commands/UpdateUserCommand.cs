using Domain.CQRS;
using Domain.CQRS.Interfaces;

namespace IdentityService.Domain.Commands
{
    public record UpdateUserCommand : ICommand<UpdateCommandResult>
	{
		public Guid Uid { get; init; }
		public string? Name { get; init; }
		public string? FamilyName { get; init; }
		public string? Password { get; init; }
        public string? Phone { get; init; }
        public bool Subscription { get; init; }
        public bool? Active { get; init; }
		public DateTime? LastSuccessfulLogin { get; init; }
        public byte[]? Avatar { get; init; }
    }
}
