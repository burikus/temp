using Domain.AuthorizationPolicies.AuthorizationRequirements;

using Microsoft.AspNetCore.Authorization;

namespace Domain.AuthorizationPolicies.AuthorizationHandlers
{
    public class AdminAuthorizationHandler : AuthorizationHandler<AdminAuthorizationRequirement>
    {
        private readonly AuthorizationHandlerUtility _authUtility;

        public AdminAuthorizationHandler(IHttpContextAccessor httpContextAccessor, IServiceProvider serviceProvider)
        {
            _authUtility = new AuthorizationHandlerUtility(httpContextAccessor, serviceProvider);
        }

        public bool AuthorizationIsSuccess(AuthorizationHandlerContext context)
        {
            return _authUtility.IsAdmin(context);
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, AdminAuthorizationRequirement requirement)
        {
            //_authUtility.ValidateUserUidPathValue(context);

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
