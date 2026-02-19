using System;

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Infrastructure.Net.Http.ReverseProxy
{
    public static class ReverseProxyExtensions
    {
        public const string DefaultConfigurationSection = "Http:ReverseProxy";
        private static readonly string ReverseProxyAdded = typeof(ReverseProxyMiddleware).FullName;

        public static IServiceCollection AddReverseProxy(this IServiceCollection services, IConfiguration config)
        {
            services.Configure<ReverseProxyOptions>(
                config.GetSection(DefaultConfigurationSection)
            );

            return services;
        }

        public static IApplicationBuilder UseReverseProxy(this IApplicationBuilder builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            if (builder.Properties.ContainsKey(ReverseProxyAdded)) return builder;

            builder.Properties[ReverseProxyAdded] = true;
            return builder.UseMiddleware<ReverseProxyMiddleware>();
        }

        public static IApplicationBuilder UseReverseProxy(this IApplicationBuilder builder, ReverseProxyOptions options)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            return builder.UseMiddleware<ReverseProxyMiddleware>(Options.Create(options));
        }
    }
}
