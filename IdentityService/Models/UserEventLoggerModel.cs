namespace IdentityService.Models
{
    public record UserEventLoggerModel
    {
        public string Uid { get; init; }
        public string UserName { get; init; }
    }
}
