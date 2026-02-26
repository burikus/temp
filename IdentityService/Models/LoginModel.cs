using System.ComponentModel.DataAnnotations;

namespace IdentityService.Models
{
    public record LoginModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; init; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password { get; init; }

        public bool Remember { get; init; } = false;
    }
}
