namespace IdentityService.Models
{
    public record UserJwtModel
    {
        public Guid Id { get; init; }
        public IEnumerable<string> RoleNames { get; init; }
    }
}
