using System.ComponentModel.DataAnnotations;

namespace IdentityService.Models
{
    public record MyDetailsModel
    {
        [Required]
        public Guid Id { get; init; }
        [Required]
        public string AboutmeText { get; init; }
        [Required]
        public string AboutmeFont { get; init; }
        [Required]
        public string AboutmeFontSize { get; init; }
        [Required]
        public string AboutmeFontColor { get; init; }
        [Required]
        public int AboutmeFontStyleWeight { get; init; }
        [Required]
        public string AboutmeAlign { get; init; }
    }
}
