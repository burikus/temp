namespace IdentityService.Models
{
    public record UserJwtModel
    {
        public Guid Uid { get; init; }
        public IEnumerable<string> RoleNames { get; init; }
    }
}
