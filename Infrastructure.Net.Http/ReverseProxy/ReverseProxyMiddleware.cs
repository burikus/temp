using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Infrastructure.Net.Http.ReverseProxy
{
    public class ReverseProxyMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;
        private readonly IOptions<ReverseProxyOptions> _options;

        public ReverseProxyMiddleware(RequestDelegate next, ILoggerFactory loggerFactory, IOptions<ReverseProxyOptions> options)
        {
            _next = next ?? throw new ArgumentNullException(nameof(next));
            _logger = (loggerFactory ?? throw new ArgumentNullException(nameof(loggerFactory)))
                .CreateLogger<ReverseProxyMiddleware>();
            _options = options ?? throw new ArgumentNullException(nameof(options));
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var request = context.Request;
            var currentValues = _options.Value;

            var currentValuesScheme = currentValues.Scheme;
            if (!string.IsNullOrWhiteSpace(currentValuesScheme))
            {
                _logger.LogDebug("Replacing request Scheme '{RequestScheme}' with '{OptionsScheme}' value", request.Scheme, currentValuesScheme);
                request.Scheme = currentValuesScheme;
            }

            var currentValuesHost = currentValues.Host;
            if (!string.IsNullOrWhiteSpace(currentValuesHost))
            {
                _logger.LogDebug("Replacing request Host '{RequestHost}' with '{OptionsHost}' value", request.Host, currentValuesHost);
                request.Host = HostString.FromUriComponent(currentValuesHost);
            }

            var currentValuesPathBase = currentValues.PathBase;
            if (!string.IsNullOrWhiteSpace(currentValuesPathBase))
            {
                _logger.LogDebug("Replacing request PathBase '{RequestPathBase}' with '{OptionsPathBase}' value", request.PathBase, currentValuesPathBase);
                request.PathBase = currentValuesPathBase;
            }

            // Call the next delegate/middleware in the pipeline.
            await _next(context);
        }
    }
}
