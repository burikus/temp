using Domain.CQRS.Interfaces;

using IdentityService.Domain.Dtos;

namespace IdentityService.Domain.Queries
{
    public record FeedbackMessagesQuery : IQuery<IEnumerable<FeedbackMessageDto>>
    {
        public bool IsAdmin { get; init; }
        public Guid? UserId { get; init; } = null;
    }
}
