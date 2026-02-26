using System.ComponentModel.DataAnnotations;

namespace IdentityService.Models
{
    public record CreateFeedbackMessageModel
    {
        [MinLength(2)]
        public string Message { get; init; }
    }
}
