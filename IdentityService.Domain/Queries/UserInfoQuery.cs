using Domain.CQRS.Interfaces;

using IdentityService.Domain.Dtos;

namespace IdentityService.Domain.Queries
{
    public record UserInfoQuery : IQuery<UserDetailsDto[]>
    {
        public Guid Uid { get; init; }
        public bool IsUserAdmin { get; init; }
    }
}
