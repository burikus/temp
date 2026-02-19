using Infrastructure.Locking;

using Serilog;

using ServiceConfiguration;
using ServiceConfiguration.Base;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Host;

namespace Stamp
{
    public class Program : HostBuilderConfigurationBase
    {
        public static void Main(string[] args)
        {
            try
            {
                var host = CreateHostBuilder(args).Build();

                CreateDbIfNotExists(host);

                var logger = host.Services.GetRequiredService<ILogger<Program>>();
                logger.LogInformation("Host created.");

                host.Run();
            }
            catch (Exception ex)
            {
                Log.Logger.Fatal(ex, "Host terminated unexpectedly.");
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Microsoft.Extensions.Hosting.Host.CreateDefaultBuilder(args)
                    .UseSerilog(ProgramConfiguration.ConfigureLogger())
                    .UseDefaultServiceProvider((_, options) =>
                    {
                        //options.ValidateOnBuild = true;
                        options.ValidateScopes = true;
                    })
                    .ConfigureAppConfiguration((hostingContext, config) =>
                    {
                        config.AddEnvironmentVariables();
                    })
                    .UseLocking<StampContext>()
                    .ConfigureWebHostDefaults(webBuilder =>
                    {
                        webBuilder.UseStartup<Startup>()
                        .ConfigureKestrel(ConfigureKestrelPorts);
                    });
        }

        private static void CreateDbIfNotExists(IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<StampContext>();
                    context.Database.EnsureCreated();
                }
                catch (Exception ex)
                {
                    Log.Logger.Error(ex, "An error occurred creating the DB.");
                }
            }
        }
    }
}
