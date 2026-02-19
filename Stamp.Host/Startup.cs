using Microsoft.AspNetCore.Http.Features;

using Serilog;

using ServiceConfiguration;

using Stamp.Core.DataAccess.EntityFramework;

namespace Stamp.Host
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940

        private readonly ProjectConfiguration _projectConfiguration;
        private readonly IConfiguration _configuration;
        private readonly IHostEnvironment _environment;

        public Startup(IWebHostEnvironment env)
        {
            _configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json")
                .Build();

            _projectConfiguration = new ProjectConfiguration(_configuration);
            _environment = env;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //_projectConfiguration.AddServices<Startup>(services);
            _projectConfiguration.AddServices<Startup, StampServiceDescriptor>(services);
            _projectConfiguration.AddDbContext<StampContext>(services, _environment, "StampStamps", "StampStamps");
            _projectConfiguration.AddMigration<StampContext>(services, _environment, "StampStamps", "StampStamps");

            IocBootstrapper.RegisterServices(services, _projectConfiguration.ServiceAddresses, _configuration);

            services.Configure<FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment environment)
        {
            _projectConfiguration.SetupMiddlewarePipeline(app, environment, MapGrpcEndpoints);

            app.UseAuthentication();
            app.UseAuthorization();

            if (environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSerilogRequestLogging();

            app.UseEndpoints(routeBuilder =>
            {
                MapGrpcEndpoints(routeBuilder);
                routeBuilder.MapDefaultControllerRoute();
                routeBuilder.MapControllers();
            });

            app.UseResponseCompression();

            //app.UseStaticFiles(new StaticFileOptions()
            //{
            //    FileProvider = new PhysicalFileProvider(Path.Combine(environment.ContentRootPath, @"StaticFiles")),
            //    RequestPath = new PathString("/StaticFiles")
            //});
        }

        private static void MapGrpcEndpoints(IEndpointRouteBuilder routeBuilder)
        {
            //routeBuilder.MapGrpcService<CommonDataService>();
        }
    }
}
