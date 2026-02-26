using System.ComponentModel.DataAnnotations;

namespace IdentityService.Models
{
    public record UpdateUserModel
    {
        [Required]
        [MaxLength(120)]
        [MinLength(1)]
        public string Name { get; init; }

        [MaxLength(120)]
        [MinLength(1)]
        public string? FamilyName { get; init; }

        [MinLength(8)]
        public string? Password { get; init; }

        public string? Phone { get; init; }
        public bool Subscription { get; init; }
        public string? Avatar { get; init; }
    }
}
