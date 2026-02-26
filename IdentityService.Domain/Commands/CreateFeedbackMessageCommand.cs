using Domain.CQRS;
using Domain.CQRS.Interfaces;

namespace IdentityService.Domain.Commands
{
    public record CreateFeedbackMessageCommand : ICommand<BaseCommandResult>
    {
        public Guid UserUid { get; init; }
        public string Message { get; init; }
        public DateTime AskedDateTime { get; init; }
    }
}
