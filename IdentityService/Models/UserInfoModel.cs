using Domain.Models;

namespace IdentityService.Models
{
    public record UserInfoModel : BaseRecordModel
    {
        public string Name { get; init; }
        public string? FamilyName { get; init; }
        public string Email { get; init; }
        public string? Avatar { get; init; }
        public bool Admin { get; init; }
        public bool Active { get; init; }
        public string Phone { get; init; }
        public string Password { get; init; }
        public bool Subscription { get; init; }
    }
}
