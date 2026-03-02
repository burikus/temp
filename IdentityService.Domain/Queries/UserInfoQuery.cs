using Domain.CQRS.Interfaces;

using IdentityService.Domain.Dtos;

namespace IdentityService.Domain.Queries
{
    public record UserInfoQuery : IQuery<UserDetailsDto[]>
    {
        public Guid Id { get; init; }
        public bool IsUserAdmin { get; init; }
    }
}
