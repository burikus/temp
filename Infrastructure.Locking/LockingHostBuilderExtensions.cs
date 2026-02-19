using Infrastructure.Locking.EntityFramework.Npgsql;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace Infrastructure.Locking;

public static class LockingHostBuilderExtensions
{
    /// <summary>
    /// Registers locking service and infrastructure.
    /// </summary>
    /// <param name="builder">host builder</param>
    /// <returns>host builder</returns>
    public static IHostBuilder UseLocking<TContext>(this IHostBuilder builder) where TContext : DbContext
    {
        return builder.ConfigureServices(
            (_, services) => services.AddLocking<LockRepository<TContext>>()
        );
    }
}
