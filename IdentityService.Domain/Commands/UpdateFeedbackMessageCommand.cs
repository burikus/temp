using Domain.CQRS.Interfaces;

using IdentityService.Domain.CommandResults;

namespace IdentityService.Domain.Commands
{
    public record UpdateFeedbackMessageCommand : ICommand<UpdateFeedbackMessageCommandResult>
    {
        public Guid Uid { get; init; }
        public Guid UserUid { get; init; }
        public string Message { get; init; }
        public DateTime AskedDateTime { get; init; }
        public DateTime? SentDateTime { get; set; }
    }
}
