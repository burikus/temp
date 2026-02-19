using Domain.AuthorizationPolicies.AuthorizationRequirements;

using Microsoft.AspNetCore.Authorization;

namespace Domain.AuthorizationPolicies.AuthorizationHandlers
{
    public class UserAuthorizationHandler : AuthorizationHandler<UserAuthorizationRequirement>
    {
        private readonly AuthorizationHandlerUtility _authUtility;

        public UserAuthorizationHandler(IHttpContextAccessor httpContextAccessor, IServiceProvider serviceProvider)
        {
            _authUtility = new AuthorizationHandlerUtility(httpContextAccessor, serviceProvider);
        }

        public bool AuthorizationIsSuccess(AuthorizationHandlerContext context)
        {
            return _authUtility.IsAdmin(context)
                    || _authUtility.IsUser(context);
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, UserAuthorizationRequirement requirement)
        {
            if (AuthorizationIsSuccess(context))
            {
                context.Succeed(requirement);
                return Task.CompletedTask;
            }

            context.Fail();
            return Task.CompletedTask;
        }
    }
}
