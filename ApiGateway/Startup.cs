using System.IdentityModel.Tokens.Jwt;

using ApiGateway.Base;
using ApiGateway.Helpers;

using Microsoft.AspNetCore.CookiePolicy;
using Microsoft.IdentityModel.Tokens;

using Ocelot.DependencyInjection;
using Ocelot.Middleware;

using Serilog;

namespace ApiGateway
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private const string ServiceAddressesSectionName = "ServiceAddresses";

        public ServiceAddresses ServiceAddresses { get; }

        public Startup(IHostEnvironment env)
        {
            Console.WriteLine($" ContentRootPath {env.ContentRootPath} env.EnvironmentName {env.EnvironmentName}");

            _configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json")
                .AddJsonFile("ocelot.json")
                .AddJsonFile($"ocelot.{env.EnvironmentName}.json")
                .Build();

            var serviceAddresses = new ServiceAddresses();
            _configuration.Bind(ServiceAddressesSectionName, serviceAddresses);
            ServiceAddresses = serviceAddresses;
        }

        public void ConfigureServices(IServiceCollection collection)
        {
            //AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport", true);
            //AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2Support", true);

            collection.AddCors();

            collection.AddControllers();
            collection.AddResponseCompression();

            collection.AddSingleton(Log.Logger);
            //collection.AddGrpc();

            //AddAuthentication(collection);

            collection.AddOcelot(_configuration);

            //https://github.com/Burgyn/MMLib.SwaggerForOcelot
            collection.AddSwaggerForOcelot(_configuration);

            IocBootstrapper.RegisterServices(collection, ServiceAddresses);

            //collection.AddProblemDetails(setup =>
            //{
            //    setup.IncludeExceptionDetails = (ctx, ex) =>
            //    {
            //        var env = ctx.RequestServices.GetRequiredService<IHostEnvironment>();
            //        return env.IsDevelopment();
            //    };
            //    setup.Rethrow<NotSupportedException>();
            //    setup.MapToStatusCode<UnauthorizedAccessException>(StatusCodes.Status401Unauthorized);
            //    setup.ValidationProblemStatusCode = StatusCodes.Status400BadRequest;
            //    setup.ValidationProblemStatusCode = StatusCodes.Status404NotFound;
            //    setup.Map<ValidationException>((ctx, ex) =>
            //    {
            //        var factory = ctx.RequestServices.GetRequiredService<ProblemDetailsFactory>();
            //        ctx.Response.ContentType = "application/problem+json";

            //        var errors = ex.Errors
            //                        .GroupBy(x => x.PropertyName)
            //                        .ToDictionary(
            //                            x => x.Key,
            //                            x => x.Select(x => x.ErrorMessage).ToArray());

            //        var response = factory.CreateValidationProblemDetails(ctx, errors);
            //        response.Instance = ctx.Request.Path;
            //        response.Detail = string.Join("\n", errors.Select(x => string.Join("\nGLEB", x.Value)));
            //        response.Errors = errors;

            //        return response;
            //    });               
            //});
            //collection.Configure<ApiBehaviorOptions>(options =>
            //{
            //    options.InvalidModelStateResponseFactory = actionContext =>
            //    {
            //        var errors = string.Join("\n",
            //                            actionContext.ModelState.Select(x => string.Join("\n",
            //                                x.Value.Errors.Select(y => string.Join("\n", y.ErrorMessage)))));

            //        var problemDetails = new ValidationProblemDetails()
            //        {
            //            Instance = actionContext.HttpContext.Request.Path,
            //            Status = StatusCodes.Status400BadRequest,
            //            Type = $"https://httpstatuses.com/400",
            //            Detail = errors
            //        };

            //        return new BadRequestObjectResult(problemDetails)
            //        {
            //            ContentTypes =
            //            {
            //                "application/problem+json",
            //                "application/problem+xml"
            //                //ApiConstants.ProblemXml,
            //                //ApiConstants.ProblemJson
            //            }
            //        };
            //    };
            //});
        }

        private static void AddAuthentication(IServiceCollection collection)
        {
            collection.AddAuthentication(o =>
            { })
                .AddJwtBearer(o =>
                {
                    o.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateAudience = false,
                        ValidateIssuer = false,
                        SignatureValidator = (token, _) => new JwtSecurityToken(token),
                    };
                });
        }

        public async void Configure(IApplicationBuilder builder, IWebHostEnvironment environment)
        {
            builder.UseRouting();

            builder.UseCookiePolicy(new CookiePolicyOptions
            {
                MinimumSameSitePolicy = SameSiteMode.None,
                HttpOnly = HttpOnlyPolicy.Always,
                Secure = CookieSecurePolicy.Always
            });

            ApplyCorsPolicy(builder, environment);

            builder.UseResponseCompression();
            //builder.UseSecureJwt();
            //builder.UseAuthentication();

            builder.UseSwagger();
            //builder.UseSwaggerForOcelotUI(opt => { opt.PathToSwaggerGenerator = "/swagger/docs"; });
            //builder.UseMiddleware<GlobalExceptionHandlerMiddleware>();
            //builder.UseProblemDetails();           

            builder.UseEndpoints(routeBuilder =>
            {
                routeBuilder.MapDefaultControllerRoute();
                routeBuilder.MapControllers();
            });

            await builder.UseOcelot();
        }

        private void ApplyCorsPolicy(IApplicationBuilder builder, IWebHostEnvironment environment)
        {
            builder.UseCors(policy =>
            {
                var corsOptions = CorsOptions.GetFromConfiguration(_configuration, environment);

                if (HasValues(corsOptions.AllowOrigins))
                {
                    policy.WithOrigins(corsOptions.AllowOrigins);
                }
                else if (corsOptions.AllowAnyOrigin)
                {
                    policy.SetIsOriginAllowed(origin => true);
                }

                if (HasValues(corsOptions.AllowMethods))
                {
                    policy.WithMethods(corsOptions.AllowMethods);
                }
                else if (corsOptions.AllowAnyMethod)
                {
                    policy.AllowAnyMethod();
                }

                if (HasValues(corsOptions.AllowHeaders))
                {
                    policy.WithHeaders(corsOptions.AllowHeaders);
                }
                else if (corsOptions.AllowAnyHeader)
                {
                    policy.AllowAnyHeader();
                }

                if (corsOptions.AllowCredentials)
                {
                    policy.AllowCredentials();
                }
                else
                {
                    policy.DisallowCredentials();
                }
            });
        }

        private static bool HasValues(string[] array)
        {
            return array != null && array.Length > 0;
        }
    }
}

