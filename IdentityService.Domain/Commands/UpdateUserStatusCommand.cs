using Domain.CQRS;
using Domain.CQRS.Interfaces;

using IdentityService.Domain.DataAccess;

namespace IdentityService.Domain.Commands
{
    public record UpdateUserStatusCommand : ICommand<UpdateCommandResult>
    {
        public Guid UserId { get; init; }
        public UserStatus Status { get; set; }
    }
}
