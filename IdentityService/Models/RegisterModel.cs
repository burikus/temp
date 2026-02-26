using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace IdentityService.Models
{
    public record RegisterModel
    {
        [Required]
        [MaxLength(120)]
        [MinLength(1)]
        public string Name { get; init; }

        [AllowNull]
        [MaxLength(120)]
        public string? FamilyName { get; init; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; init; }

        [Required]
        [MinLength(8)]
        public string Password { get; init; }

        public bool Remember { get; init; } = false;
    }
}
