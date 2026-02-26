using ServiceConfiguration;

using Hellang.Middleware.ProblemDetails;

using IdentityService.DataAccess.EntityFramework;
using IdentityService.Domain;
using IdentityService.Options;
using IdentityService.Services;

using Infrastructure.Net.Http.ReverseProxy;

using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Identity;

using Serilog;

using ServiceConfiguration.Options.Identity;

namespace IdentityService
{
    public class Startup
    {
        private readonly ProjectConfiguration _projectConfiguration;
        private const string TokenOptionsSectionName = "TokenOptions";
        private readonly AuthOptions _tokenOptions;
        private readonly IConfiguration _configuration;
        private readonly IHostEnvironment _environment;
        private readonly RabbitMqConfiguration _rabbit;

        public Startup(IWebHostEnvironment env)
        {
            _configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json")
                .Build();

            _environment = env;
            _projectConfiguration = new ProjectConfiguration(_configuration);
            _tokenOptions = _configuration.GetSection(TokenOptionsSectionName).Get<AuthOptions>();
            _rabbit = _configuration.GetSection("ServiceConfiguration:RabbitMQ").Get<RabbitMqConfiguration>();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddReverseProxy(_configuration);

            services.Configure<EmailConfirmationTokenProviderOptions>(
                            _configuration.GetSection(EmailConfirmationTokenProviderOptions.SectionName));
            services.Configure<DataProtectionTokenProviderOptions>(
                _configuration.GetSection("DataProtectionTokenProviderOptions"));

            _projectConfiguration.AddServices<Startup, IdentityServiceDomainDescriptor>(services);
            _projectConfiguration.AddDbContext<IdentityContext>(services, _environment, "StampIdentity", "StampIdentity");
            _projectConfiguration.AddMigration<IdentityContext>(services, _environment, "StampIdentity", "StampIdentity");

            IocBootstrapper.RegisterServices(_configuration, services, _projectConfiguration.ServiceAddresses, _tokenOptions, /*_scheduleOptions,*/ _environment, _rabbit);

            services
                .Configure<FormOptions>(o =>
                {
                    o.ValueLengthLimit = int.MaxValue;
                    o.MultipartBodyLengthLimit = int.MaxValue;
                    o.MemoryBufferThreshold = int.MaxValue;
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment environment)
        {
            //app.UseProblemDetails();

            _projectConfiguration.SetupMiddlewarePipeline(app, environment, MapGrpcEndpoints);
            app.UseStaticFiles();

            app.UseAuthentication();
            app.UseAuthorization();

            if (environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseEndpoints(routeBuilder =>
            {
                MapGrpcEndpoints(routeBuilder);
                routeBuilder.MapDefaultControllerRoute();
                routeBuilder.MapControllers();
                routeBuilder.MapRazorPages();
            });
            app.UseForwardedHeaders();

            app.UseResponseCompression();

            app.UseReverseProxy();

            app.UseSerilogRequestLogging();

            app.UseProblemDetails();

            //app.UseCookiePolicy(new CookiePolicyOptions
            //{
            //    MinimumSameSitePolicy = SameSiteMode.None,
            //    HttpOnly = HttpOnlyPolicy.Always,
            //    Secure = CookieSecurePolicy.Always
            //});
        }

        private static void MapGrpcEndpoints(IEndpointRouteBuilder routeBuilder)
        {
            //routeBuilder.MapGrpcService<UserDataService>();
        }
    }
}
