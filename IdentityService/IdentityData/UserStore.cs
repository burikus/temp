using Domain.Interfaces;

using IdentityService.DataAccess.EntityFramework;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Entities.Relations;
using IdentityService.Domain.Interfaces;

using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace IdentityService.IdentityData
{
    public class UserStore : IIdentityUserStore<User>
    {
        private readonly IdentityContext _dbContext;
        private readonly IMapper _mapper;
        private IDateTimeProvider _dateTimeProvider;

        ///// <summary>
        ///// The data protection purpose used for the email confirmation related methods.
        ///// </summary>
        //public const string ConfirmEmailTokenPurpose = "EmailConfirmation";

        public UserStore(IdentityContext dbContext, IMapper mapper, IDateTimeProvider dateTimeProvider)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
        }

        public Task SetPasswordHashAsync(User userDto, string passwordHash, CancellationToken cancellationToken)
        {
            if (userDto == null)
            {
                throw new ArgumentNullException(nameof(userDto));
            }

            userDto.PasswordHash = passwordHash;
            return Task.CompletedTask;
        }

        public Task<string> GetPasswordHashAsync(User userDto, CancellationToken cancellationToken)
        {
            if (userDto == null)
            {
                throw new ArgumentNullException(nameof(userDto));
            }

            return Task.FromResult(userDto.PasswordHash);
        }

        public Task<bool> HasPasswordAsync(User userDto, CancellationToken cancellationToken)
        {
            return Task.FromResult(userDto.PasswordHash != null);
        }

        public Task<string> GetUserIdAsync(User userDto, CancellationToken cancellationToken)
        {
            if (userDto == null)
            {
                throw new ArgumentNullException(nameof(userDto));
            }

            return Task.FromResult(userDto.Id.ToString());
        }

        public Task<string> GetUserNameAsync(User userDto, CancellationToken cancellationToken)
        {
            if (userDto == null)
            {
                throw new ArgumentNullException(nameof(userDto));
            }

            return Task.FromResult(userDto.UserName);
        }

        public Task SetUserNameAsync(User userDto, string userName, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task<string> GetNormalizedUserNameAsync(User userDto, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task SetNormalizedUserNameAsync(User userDto, string normalizedName, CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }

        public async Task<IdentityResult> CreateAsync(User userDto, CancellationToken cancellationToken)
        {
            if (userDto == null)
            {
                throw new ArgumentNullException(nameof(userDto));
            }

            await _dbContext.AddAsync(_mapper.Map<User>(userDto), cancellationToken);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return IdentityResult.Success;
        }

        public async Task<IdentityResult> UpdateAsync(User user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            _dbContext.Update(user);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return IdentityResult.Success; //UpdateUserAsync(user);
        }
        //protected virtual async Task<IdentityResult> UpdateUserAsync(TUser user)
        //public async Task<IdentityResult> UpdateAsync(User user)
        //{
        //    _dbContext.Update(user);

        //    return IdentityResult.Success;
        //}

        ////public async Task UpdateUserOrThrowAsync(UserDto user)
        ////{
        ////	var result = await UpdateAsync(user).ConfigureAwait(false);

        ////	if (!result.Succeeded)
        ////	{
        ////		throw new InvalidOperationException(result.ToString());
        ////	}
        ////}

        public Task<IdentityResult> DeleteAsync(User userDto, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public async Task<User> FindByIdAsync(string userId, CancellationToken cancellationToken)
        {
            var user = await _dbContext.User
                .FirstOrDefaultAsync(user => user.Id == userId, cancellationToken)
                .ConfigureAwait(false);

            return _mapper.Map<User>(user);
        }

        public async Task<IEnumerable<User>> FindByIdsAsync(IEnumerable<Guid> userIds, CancellationToken cancellationToken)
        {
            var users = await _dbContext.User
                .Where(user => userIds.Contains(Guid.Parse(user.Id)))
                .ToArrayAsync(cancellationToken)
                .ConfigureAwait(false);

            return _mapper.Map<IEnumerable<User>>(users);
        }

        public async Task<User> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
        {
            return await _dbContext.User
                .FirstOrDefaultAsync(user => user.UserName.ToUpper() == normalizedUserName)
                .ConfigureAwait(false);
        }

        public void Dispose()
        { }

        public async Task AddToRoleAsync(User user, string roleName, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            if (string.IsNullOrWhiteSpace(roleName))
            {
                throw new ArgumentException(nameof(roleName));
            }

            var roleEntity = await FindRoleAsync(roleName, cancellationToken);

            if (roleEntity == null)
            {
                throw new InvalidOperationException(roleName);
            }

            _dbContext.UserRole.Add(CreateUserRole(user.Id, roleEntity.Id));
        }

        public Task RemoveFromRoleAsync(User user, string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<IList<string>> GetRolesAsync(User user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            var query = _dbContext.UserRole
                .Join(_dbContext.Role, userRole => userRole.RoleId, role => role.Id,
                    (userRole, role) => new { userRole, role })
                .Where(t => t.userRole.UserId.Equals(user.Id))
                .Select(t => t.role.NormalizedName);

            return await query.ToListAsync(cancellationToken);
        }

        public async Task<bool> IsInRoleAsync(User user, string normalizedRoleName, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            if (string.IsNullOrWhiteSpace(normalizedRoleName))
            {
                throw new ArgumentException(nameof(normalizedRoleName));
            }

            var role = await FindRoleAsync(normalizedRoleName, cancellationToken);

            if (role != null)
            {
                var userRole = await FindUserRoleAsync(user.Id, role.Id, cancellationToken);
                return userRole != null;
            }

            return false;
        }

        public Task<IList<User>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        private Task<Role> FindRoleAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {

            var result = _dbContext.Roles.SingleOrDefaultAsync(r => r.NormalizedName == normalizedRoleName, cancellationToken).Result;

            return Task.FromResult(new Role { Id = result.Id, Name = result.Name, NormalizedName = result.NormalizedName, ConcurrencyStamp = result.ConcurrencyStamp });

        }

        protected Task<UserRole> FindUserRoleAsync(string userId, string roleId, CancellationToken cancellationToken)
        {
            return _dbContext.UserRole.FindAsync(new object[] { userId, roleId }, cancellationToken).AsTask();
        }

        protected UserRole CreateUserRole(string userUid, string roleUid)
        {
            return new()
            {
                UserId = userUid,
                RoleId = roleUid
            };
        }

        public Task SetEmailAsync(User user, string email, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.Email = email.Trim();
            user.NormalizedEmail = email.Trim().ToUpper();

            return Task.CompletedTask;
        }

        public Task<string> GetEmailAsync(User user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            return Task.FromResult(user.Email);
        }

        public Task<bool> GetEmailConfirmedAsync(User user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            return Task.FromResult(true);
        }

        public Task SetEmailConfirmedAsync(User user, bool confirmed, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<User> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken)
        {
            return await _dbContext.User.FirstOrDefaultAsync(u => u.NormalizedEmail == normalizedEmail,
                cancellationToken).ConfigureAwait(false);
        }

        public Task<string> GetNormalizedEmailAsync(User user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task SetNormalizedEmailAsync(User user, string normalizedEmail, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            user.NormalizedEmail = normalizedEmail;
            return Task.CompletedTask;
        }
    }
}