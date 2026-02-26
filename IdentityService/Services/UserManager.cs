using System.Security.Claims;

using IdentityService.DataAccess.EntityFramework;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Messaging;
using IdentityService.Messaging;

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace IdentityService.Services
{
    public class UserManager : UserManager<User>
    {
        private readonly OutboxMessageService<IdentityContext> _messageService;

        public UserManager(
            IdentityContext context,
            IUserStore<User> store,
            IOptions<IdentityOptions> optionsAccessor,
            IPasswordHasher<User> passwordHasher,
            IEnumerable<IUserValidator<User>> userValidators,
            IEnumerable<IPasswordValidator<User>> passwordValidators,
            ILookupNormalizer keyNormalizer,
            IdentityErrorDescriber errors,
            IServiceProvider services,
            ILogger<UserManager> logger)
            : base(
                store,
                optionsAccessor,
                passwordHasher,
                userValidators,
                passwordValidators,
                keyNormalizer,
                errors,
                services,
                logger)
        {
            _messageService = new OutboxMessageService<IdentityContext>(context);
        }

        public override async Task<IdentityResult> ConfirmEmailAsync(User user, string token)
        {
            var result = await base.ConfirmEmailAsync(user, token);
            await PublishVerificationCompleteEvent(result, user);
            return result;
        }

        public async Task<IdentityResult> RestorePasswordAsync(string email)
        {
            var user = await base.FindByEmailAsync(email);
            if (user != null && await base.IsEmailConfirmedAsync(user))
            {
                var result = IdentityResult.Success;
                await PublishVerificationCompleteEvent(result, user);
                return result;
            }

            return IdentityResult.Failed();
        }

        private async Task PublishVerificationCompleteEvent(IdentityResult operationResult, User user)
        {
            if (!operationResult.Succeeded) return;

            _messageService.AddMessage(
                new UserVerificationCompleteMessage
                {
                    Entity = new UserIdentity
                    {
                        Uid = Guid.Parse(user.Id),
                        Email = user.Email
                    }
                }
            );
            await _messageService.SaveMessagesToDb().ConfigureAwait(false);
        }

        private async Task PublishPasswordRestoreEvent(IdentityResult operationResult, User user)
        {
            if (!operationResult.Succeeded) return;

            _messageService.AddMessage(
                new UserVerificationCompleteMessage
                {
                    Entity = new UserIdentity
                    {
                        Uid = Guid.Parse(user.Id),
                        Email = user.Email
                    }
                }
            );
            await _messageService.SaveMessagesToDb().ConfigureAwait(false);
        }

        public virtual async Task<bool> HasAnyLoginsAsync(ClaimsPrincipal principal)
        {
            if (principal == null)
            {
                throw new ArgumentNullException(nameof(principal));
            }

            var user = await base.GetUserAsync(principal);
            return await HasAnyLoginsAsync(user);
        }

        public virtual async Task<bool> HasAnyLoginsAsync(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            return (await base.GetLoginsAsync(user)).Any();
        }

        //public virtual async Task<IdentityResult> AddLoginIfNotExistsAsync(User user, UserLoginInfo userLoginInfo)
        //{
        //	if (await base.FindByLoginAsync(userLoginInfo.LoginProvider, userLoginInfo.ProviderKey) == null)
        //	{
        //		return await base.AddLoginAsync(user, new UserLoginInfo(userLoginInfo.LoginProvider, userLoginInfo.ProviderKey, userLoginInfo.ProviderDisplayName));
        //	}

        //	return IdentityResult.Success;
        //}

        //public Task<IdentityResult> AddLoginIfNotExistsAsync(FinlisticsIdentityProviderUser user, LoginProviderInfo loginProviderInfo)
        //{
        //	var providerKey = SHA1GuidGenerator.GenerateGuidFromString($"{user.Email}±{user.SiteId}").ToString();

        //	return AddLoginIfNotExistsAsync(user, new UserLoginInfo(loginProviderInfo.Name, providerKey, loginProviderInfo.DisplayName));
        //}

        //public Task<IdentityResult> AddOrUpdateAsync(string email, string name, string siteId, int? clientId, Guid? clientUid = null, string? clientName = null)
        //{
        //	return AddOrUpdateAsync(email, name, siteId, clientId, clientUid, clientName, CreateUser, x =>
        //	{
        //		x.Email = email;
        //		x.Name = name;
        //		x.ClientUid = clientUid;
        //		x.ClientName = clientName;
        //		x.SiteId = siteId;
        //		x.ClientId = clientId;
        //		return x;
        //	});
        //}

        //public Task<IdentityResult> AddOrUpdateAsync(string email, string name, string siteId, Guid? clientUid = null, string? clientName = null)
        //{
        //	return AddOrUpdateAsync(email, name, siteId, null, clientUid, clientName, CreateUser, x =>
        //	{
        //		x.Email = email;
        //		x.Name = name;
        //		x.ClientUid = clientUid;
        //		x.ClientName = clientName;
        //		x.SiteId = siteId;
        //		return x;
        //	});
        //}

        //public Task<IdentityResult> CreateUserAsync(string email, string name, string siteId, int? clientId, Guid? clientUid = null, string? clientName = null)
        //{
        //	return CreateAsync(CreateUser(email, name, siteId, clientId, clientUid, clientName));
        //}

        //private async Task<IdentityResult> AddOrUpdateAsync(string email, string name, string siteId, int? clientId, Guid? clientUid, string? clientName, Func<string, string, string, int?, Guid?, string?, FinlisticsIdentityProviderUser> createAction, Func<FinlisticsIdentityProviderUser, FinlisticsIdentityProviderUser> updateAction)
        //{
        //	var user = await FindByEmailAsync(email).ConfigureAwait(false);

        //	return user == null ? await CreateAsync(createAction(email, name, siteId, clientId, clientUid, clientName)) : await UpdateAsync(updateAction(user));
        //}

        //private static User CreateUser(string email, string name, string siteId, int? clientId, Guid? clientUid, string? clientName)
        //{
        //	return new User
        //	{
        //		UserName = email,
        //		Email = email,
        //		Name = name,
        //		PasswordHash = string.Empty,
        //		ClientUid = clientUid,
        //		ClientId = clientId,
        //		ClientName = clientName,
        //		SiteId = siteId,
        //		Active = true
        //	};
        //}
    }
}
