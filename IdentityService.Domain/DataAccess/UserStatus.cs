using System.ComponentModel;

namespace IdentityService.Domain.DataAccess
{
    public enum UserStatus
    {
        [Description("New")]
        New = 0,
        [Description("Invitation Sent")]
        InvitationSent = 1,
        [Description("Invitation Expired")]
        InvitationExpired = 2,
        [Description("Active")]
        Active = 3,
        [Description("Inactive")]
        Inactive = 4,
    }
}
