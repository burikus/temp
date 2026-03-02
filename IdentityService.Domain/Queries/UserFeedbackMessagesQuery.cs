using Domain.CQRS.Interfaces;

using IdentityService.Domain.Dtos;

namespace IdentityService.Domain.Queries
{
    public record UserFeedbackMessagesQuery : IQuery<FeedbackMessageDto[]>
    {
        public Guid UserId { get; init; }
        public bool IsAdmin { get; init; }
    }
}
