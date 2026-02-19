using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Locking
{
    public static class LockingServiceCollectionExtensions
    {
        public static IServiceCollection AddLocking<T>(this IServiceCollection services)
        {
            services.AddScoped(typeof(ILockRepository), typeof(T));
            services.AddScoped<LockService>();

            return services;
        }
    }
}
