using IdentityService.Domain.DataAccess.Entities;

using Microsoft.AspNetCore.Identity;

namespace IdentityService.Domain.Interfaces
{
    public interface IIdentityUserStore<TUser> : IUserPasswordStore<TUser>, IUserRoleStore<TUser>, IUserEmailStore<TUser>
        where TUser : User
    {
        Task<IEnumerable<TUser>> FindByIdsAsync(IEnumerable<Guid> userIds, CancellationToken cancellationToken);
        Task<IdentityResult> UpdateAsync(User user, CancellationToken cancellationToken);

    }
}
