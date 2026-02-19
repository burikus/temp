using ApiGateway;
using ApiGateway.Base;

using Serilog;

namespace ApiGateway
{
    public class Program : HostBuilderConfigurationBase
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseDefaultServiceProvider(options =>
                {
                    options.ValidateScopes = false;
                })
                .ConfigureWebHostDefaults(webBuilder => webBuilder
                    .UseStartup<Startup>()
                    .ConfigureKestrel(
                            (context, options) =>
                            {
                                ConfigureKestrelPorts(context, options);
                                options.Limits.MaxRequestBodySize = 31 * 1024 * 1024;
                            })
                )
                .UseSerilog((context, configuration) =>
                {
                    configuration.MinimumLevel.Warning()
                        .WriteTo.Console()
                        .Enrich.FromLogContext();
                });
    }
}
