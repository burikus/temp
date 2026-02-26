using Domain.CQRS.Interfaces;

using IdentityService.Domain.Dtos;

namespace IdentityService.Domain.Queries
{
    public record NewsletterQuery : IQuery<MyDetailsDto>
    {
    }
}
