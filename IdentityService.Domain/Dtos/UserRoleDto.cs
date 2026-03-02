using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.Dtos
{
    public record UserRoleDto
    {
        public Guid UserId { get; init; }
        public Guid RoleId { get; init; }
        public User User { get; init; }
        public Role Role { get; init; }
    }
}
