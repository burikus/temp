using Domain.CQRS.Interfaces;

using IdentityService.Domain.Dtos;

namespace IdentityService.Domain.Queries
{
    public record UserCredentialsQuery : IQuery<UserDetailsDto>
    {
        public string Email { get; init; }
        public string Password { get; init; }
    }
}
