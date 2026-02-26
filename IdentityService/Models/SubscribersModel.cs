namespace IdentityService.Models
{
    public record SubscribersModel
    {
        public UserDetailModel[] Subscribed { get; init; }
    }

    public record UserDetailModel
    {
        public string Name { get; init; }
        public string Email { get; init; }
        public bool Checked { get; init; } = true;
    }
}
