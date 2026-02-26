using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.Dtos
{
    public record UserRoleDto
    {
        public Guid UserUid { get; init; }
        public Guid RoleUid { get; init; }
        public User User { get; init; }
        public Role Role { get; init; }
    }
}
