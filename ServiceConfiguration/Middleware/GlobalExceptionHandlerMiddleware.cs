using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;

namespace ServiceConfiguration.Middleware
{
    public class GlobalExceptionHandlerMiddleware : IMiddleware
    {
        //private static readonly HashSet<Type> ExcludedExceptions = new()
        //{
        //	typeof(System.ComponentModel.DataAnnotations.ValidationException),
        //	typeof(FluentValidation.ValidationException),
        //	typeof(EntityNotFoundException)
        //};

        public async Task InvokeAsync(HttpContext httpContext, RequestDelegate next)
        {
            try
            {
                await next(httpContext);
            }
            catch
            {
                throw;
            }
        }
    }
}
