using System.ComponentModel.DataAnnotations;

namespace IdentityService.Models
{
    public record NewsLetterUserModel
    {
        [Required]
        public Guid Uid { get; init; }
        [Required]
        public string NewsletterText { get; init; }
        [Required]
        public string NewsletterFont { get; init; }
        [Required]
        public string NewsletterFontSize { get; init; }
        [Required]
        public string NewsletterFontColor { get; init; }
        [Required]
        public int NewsletterFontStyleWeight { get; init; }
        [Required]
        public string NewsletterAlign { get; init; }
    }
}
