using IdentityService.Domain.Dtos;

namespace IdentityService.Models
{
    public record UserFeedbackMessageModel
    {
        public FeedbackMessageDto[] Items { get; init; }
    }
}
