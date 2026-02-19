using Domain.Constants;
using Domain.CustomExceptions;
using Domain.Extensions;
using Domain.Interfaces;

using Microsoft.AspNetCore.Authorization;

using static Domain.Utils.SystemObjects;

namespace Domain.AuthorizationPolicies.AuthorizationHandlers
{
    public class AuthorizationHandlerUtility
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IServiceProvider _serviceProvider;

        public const string UserUid = "userUid";

        public AuthorizationHandlerUtility(IHttpContextAccessor httpContextAccessor, IServiceProvider serviceProvider)
        {
            _httpContextAccessor = RequireNotNull(httpContextAccessor, nameof(httpContextAccessor));
            _serviceProvider = RequireNotNull(serviceProvider, nameof(serviceProvider));
        }

        public void ValidateUserUidPathValue(AuthorizationHandlerContext context)
        {
            using var scope = _serviceProvider.CreateScope();
            var userService = RequireNotNull(
                scope.ServiceProvider.GetRequiredService<IUserService>(), nameof(IUserService));

            var pathUserUid = GetPathUidBy(UserUid);
            if (!pathUserUid.HasValue ||
                !userService.GetUserUidsVerificationResultAsync(
                    new[] { pathUserUid.Value }).Result.IsSuccess)
            {
                throw new EntityNotFoundException("User not found.");
            }
        }

        public void ValidateUserUidQueryValue()
        {
            using var scope = _serviceProvider.CreateScope();
            var userService = RequireNotNull(
                scope.ServiceProvider.GetRequiredService<IUserService>(), nameof(IUserService));

            var queryStringUserUid = GetQueryStringUidBy(UserUid);
            if (queryStringUserUid.HasValue &&
                !userService.GetUserUidsVerificationResultAsync(
                    new[] { queryStringUserUid.Value }).Result.IsSuccess)
            {
                throw new EntityNotFoundException("User not found.");
            }
        }

        public Guid? GetPathUidBy(string parameterName)
        {
            return ExtractUidFromRequest(httpRequest =>
                httpRequest.RouteValues.TryGetValue(parameterName, out var uidOnPath) &&
                uidOnPath is not null &&
                Guid.TryParse((string)uidOnPath, out var uid)
                    ? uid
                    : null);
        }

        public Guid? GetQueryStringUidBy(string parameterName)
        {
            return ExtractUidFromRequest(httpRequest =>
                httpRequest.Query.TryGetValue(parameterName, out var uidOnQuery) &&
                Guid.TryParse(uidOnQuery, out var uid)
                    ? uid
                    : null);
        }


        public Guid GetContextUserUid(AuthorizationHandlerContext context) =>
            Guid.Parse(context.User.GetUserUid()!);

        public bool IsUserAccessingPermittedResource(AuthorizationHandlerContext context) =>
            GetPathUidBy(UserUid) == GetContextUserUid(context);

        public bool IsQueryStringContains(string parameterName) =>
            GetQueryStringUidBy(parameterName).HasValue;

        private Guid? ExtractUidFromRequest(Func<HttpRequest, Guid?> getUidFromRequest)
        {
            return getUidFromRequest(_httpContextAccessor.HttpContext!.Request);
        }

        public bool IsUser(AuthorizationHandlerContext context) =>
            context.User.HasClaim(x => x.Value == RoleName.User)
            || _httpContextAccessor.HttpContext!.User.HasClaim(x => x.Value == RoleName.User);

        public bool IsAdmin(AuthorizationHandlerContext context) =>
            context.User.HasClaim(x => x.Value == RoleName.Admin)
            || _httpContextAccessor.HttpContext!.User.HasClaim(x => x.Value == RoleName.Admin);
    }
}
