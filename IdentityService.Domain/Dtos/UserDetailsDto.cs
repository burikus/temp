using Domain.Dtos;

using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.Dtos
{
    public record UserDetailsDto : BaseRecordDto
    {
        public string? Name { get; init; }
        public string? FamilyName { get; init; }
        public string FullName { get; init; }
        public string Email { get; init; }
        public string NormalizedEmail { get; set; }
        public string Password { get; init; }
        public DateTime CreatedDate { get; set; }
        public IEnumerable<Role> Roles { get; init; }    //RoleDto
        public bool Active { get; init; }
        public bool Admin { get; init; }
        public byte[]? Avatar { get; init; }
        public string? Phone { get; init; }
        public bool Subscription { get; init; }
    }
}
