using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Emails.Infrastructure.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection UseDbMailBoxService<T>(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton(configuration.GetRequiredSection(EmailHostConfiguration.SectionName).Get<EmailHostConfiguration>());
            services.AddScoped(typeof(IMailboxRepository), typeof(T));
            services.AddScoped<IEmailService, EmailService>();

            return services;
        }
    }
}
