using System.Text;

using Domain.Extensions;
using Domain.Interfaces.Repositories;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Dtos;
using IdentityService.Interfaces;
using IdentityService.Services;
using Infrastructure.Emails.Infrastructure;
using Infrastructure.Net.Http.ReverseProxy;

using Microsoft.Extensions.Options;

namespace IdentityService.Areas.Identity
{
    public interface IAccountNotificationBuilder
    {
        Task<EmailMessage> BuildConfirmAccountEmailMessageAsync(NotificationRecipient user);
        Task<EmailMessage> BuildPasswordRestoreMessageAsync(string email);
        Task<EmailMessage> BuildFeedbackInternal(Guid userUid, string message);
    }

    public class AccountNotificationBuilder : IAccountNotificationBuilder
    {
        private readonly IHttpContextAccessor _accessor;
        private readonly LinkGenerator _linkGenerator;
        private readonly IOptions<ReverseProxyOptions> _proxyOptions;
        private readonly IEmailBuilder _emailBuilder;
        private readonly UserManager _userManager;
        private readonly IReadonlyRepository<User> _userReadOnlyRepository;

        public AccountNotificationBuilder(
            IHttpContextAccessor accessor,
            LinkGenerator linkGenerator,
            IOptions<ReverseProxyOptions> proxyOptions,
            IEmailBuilder emailBuilder,
            UserManager userManager,
            IReadonlyRepository<User> userReadOnlyRepository)
        {
            _accessor = accessor ?? throw new ArgumentNullException(nameof(accessor));
            _linkGenerator = linkGenerator ?? throw new ArgumentNullException(nameof(linkGenerator));
            _proxyOptions = proxyOptions ?? throw new ArgumentNullException(nameof(proxyOptions));
            _emailBuilder = emailBuilder ?? throw new ArgumentNullException(nameof(emailBuilder));
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
            _userReadOnlyRepository = userReadOnlyRepository ?? throw new ArgumentNullException(nameof(userReadOnlyRepository));
        }

        public async Task<EmailMessage> BuildConfirmAccountEmailMessageAsync(NotificationRecipient user)
        {
            var target = await _userReadOnlyRepository.GetSingle(new UserSpecs.ByUserEmail(user.Email)).ConfigureAwait(false);
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(target);
            var encodedToken = Convert.ToBase64String(Encoding.UTF8.GetBytes(token)); //WebEncoders.Base64UrlEncode

            var callbackUrl = _linkGenerator.GetUriByPage(
                page: "",
                handler: null,
                values: new
                {
                    uid = user.Uid,
                    code = encodedToken
                },
                scheme: _proxyOptions.Value.Scheme!,
                host: HostString.FromUriComponent(_proxyOptions.Value.Host!),
                pathBase: _proxyOptions.Value.PathBase ?? PathString.Empty
            ) ?? $"https://o-iva.ru/Identity/Account/ConfirmEmail?userId={Uri.EscapeDataString(user.Uid.ToString())}&code={encodedToken}";

            return _emailBuilder.BuildConfirmAccountEmailMessage(callbackUrl, new[] { user.Email });
        }

        public async Task<EmailMessage> BuildPasswordRestoreMessageAsync(string email)
        {
            var user = await _userReadOnlyRepository.GetSingle(new UserSpecs.ByUserEmail(email)).ConfigureAwait(false);

            return _emailBuilder.BuildPasswordRestoreMessage(new[] { user.Email }, user.PasswordHash.StringToObject());
        }

        public async Task<EmailMessage> BuildFeedbackInternal(Guid userUid, string userMessage)
        {
            var user = await _userReadOnlyRepository.GetSingle(new UserSpecs.ByUid(userUid)).ConfigureAwait(false);
            return _emailBuilder.BuildUserMessage(user, userMessage);
        }
    }
}
