using System.ComponentModel.DataAnnotations;

namespace IdentityService.Models
{
    public record RestorePasswordModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; init; }
    }
}
