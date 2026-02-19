using System.Net.Http.Headers;
using System.Threading.Tasks;

using ApiGateway.Base;

using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;

namespace ApiGateway.Middleware
{
    //public class SecureJwtMiddleware : OcelotAuthenticationMiddlewareBase
    //{
    //    private readonly RequestDelegate _next;

    //    public SecureJwtMiddleware(RequestDelegate next)
    //    {
    //        _next = next;
    //    }

    //    public async Task InvokeAsync(HttpContext context)
    //    {
    //        var authorization = context.Request.Headers[HeaderNames.Authorization];
    //        AuthenticationHeaderValue.TryParse(authorization, out var headerValue);

    //        if (headerValue == null || string.IsNullOrEmpty(headerValue.Parameter))
    //        {
    //            ExecuteCookieWorkFlow(context);
    //        }

    //        await _next.Invoke(context);
    //    }

    //    private void ExecuteCookieWorkFlow(HttpContext context)
    //    {
    //        var cookies = context.Request.Cookies;

    //        cookies.TryGetValue(CookieKey, out string token);

    //        if (!string.IsNullOrEmpty(token))
    //        {
    //            context.Request.Headers.Add(HeaderNames.Authorization, "Bearer " + token);
    //        }
    //    }
    //}
}