namespace IdentityService.Domain.Dtos
{
    public record SubscribersDto
    {
        public UserDetailDto[] Subscribed { get; init; }
    }

    public record UserDetailDto
    {
        public string Name { get; init; }
        public string Email { get; init; }
    }
}
