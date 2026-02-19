using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Reflection;

using Domain.ApplicationSettings;
using Domain.Constants;
using Domain.CQRS.Interfaces;
using Domain.CustomExceptions;
using Domain.DataAccess.Specifications.Factories;
using Domain.Enums;
using Domain.Interfaces;
using Domain.Providers;
using Domain.Utils;
using Infrastructure.Locking;
using ServiceConfiguration.Helpers;
using ServiceConfiguration.Middleware;
using ServiceConfiguration.Options.Identity;
using ServiceConfiguration.Options.JsonConverters;

using FluentMigrator.Runner;

using FluentValidation;

using Hellang.Middleware.ProblemDetails;

using MediatR;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

using Serilog;
using Microsoft.OpenApi.Models;

namespace ServiceConfiguration
{
    public sealed class ProjectConfiguration
    {
        private const string ServiceAddressesSectionName = "ServiceAddresses";
        private const string ServiceNameSection = "ServiceName";
        private const string TokenOptionsSectionName = "TokenOptions";

        private readonly SwaggerConfig _swaggerConfig;
        private readonly IConfiguration _configuration;
        private readonly TokenValidationOptions _tokenOptions;

        public ServiceAddresses ServiceAddresses { get; }

        public ProjectConfiguration(IConfiguration configuration)
        {
            _configuration = configuration;

            var serviceAddresses = new ServiceAddresses();
            _configuration.Bind(ServiceAddressesSectionName, serviceAddresses);
            ServiceAddresses = serviceAddresses;

            _swaggerConfig = new SwaggerConfig(configuration[ServiceNameSection]);

            _tokenOptions = new TokenValidationOptions(
                _configuration
                    .GetSection(TokenOptionsSectionName)
                    .Get<TokenValidationConfiguration>());
        }

        public void AddServices<TStartup, TDomain>(IServiceCollection collection)
        {
            var assembly = typeof(TDomain).Assembly;
            collection.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(assembly, typeof(LockService).Assembly));

            //collection.AddFluentValidationAutoValidation(options =>
            //{
            //	//options.ImplicitlyValidateChildProperties = true;
            //});

            //collection.AddTransient<IValidatorInterceptor, FluentValidationInterceptor>();

            collection.Scan(selector => selector.FromAssemblies(assembly)
                .AddClasses(filter => filter.AssignableTo(typeof(IQueryHandler<,>)))
                .AsImplementedInterfaces()
                .WithTransientLifetime());
            collection.Scan(selector => selector.FromAssemblies(assembly)
                .AddClasses(filter => filter.AssignableTo(typeof(ICommandHandler<,>)))
                .AsImplementedInterfaces()
                .WithTransientLifetime());

            collection.AddMvc();

            collection.AddProblemDetails(setup =>
            {
                setup.IncludeExceptionDetails = (ctx, ex) =>
                {
                    var env = ctx.RequestServices.GetRequiredService<IHostEnvironment>();
                    return env.IsDevelopment();
                };
                setup.Rethrow<NotSupportedException>();
                setup.MapToStatusCode<UnauthorizedAccessException>(StatusCodes.Status401Unauthorized);
                setup.ValidationProblemStatusCode = StatusCodes.Status400BadRequest;
                setup.Map<ValidationException>((ctx, ex) =>
                {
                    var factory = ctx.RequestServices.GetRequiredService<ProblemDetailsFactory>();
                    ctx.Response.ContentType = ApiConstants.ProblemJson;

                    var errors = ex.Errors
                                    .GroupBy(x => x.PropertyName)
                                    .ToDictionary(
                                        x => x.Key,
                                        x => x.Select(x => x.ErrorMessage).ToArray());

                    var response = factory.CreateValidationProblemDetails(ctx, errors);
                    response.Instance = ctx.Request.Path;
                    response.Detail = string.Join("\n", errors.Select(x => string.Join("\n", x.Value)));
                    response.Errors = errors;

                    return response;
                });
                setup.Map<EntityNotFoundException>((ctx, ex) =>
                {
                    var factory = ctx.RequestServices.GetRequiredService<ProblemDetailsFactory>();
                    ctx.Response.ContentType = ApiConstants.ProblemJson;

                    var errors = new Dictionary<string, string[]>();
                    errors.Add("Entity", new[] { "Not Found" });

                    var response = factory.CreateValidationProblemDetails(ctx, errors);
                    response.Instance = ctx.Request.Path;
                    response.Status = StatusCodes.Status404NotFound;
                    response.Detail = string.Join("\n", errors.Select(x => string.Join("\n", x.Value)));
                    response.Errors = errors;

                    return response;
                });
            });

            collection.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;

                options.InvalidModelStateResponseFactory = actionContext =>
                {
                    var errors = string.Join("\n",
                                        actionContext.ModelState.Select(x => string.Join("\n",
                                            x.Value.Errors.Select(y => string.Join("\n", y.ErrorMessage)))));

                    var problemDetails = new ValidationProblemDetails()
                    {
                        Instance = actionContext.HttpContext.Request.Path,
                        Status = StatusCodes.Status400BadRequest,
                        Type = $"https://httpstatuses.com/400",
                        Detail = errors
                    };

                    return new BadRequestObjectResult(problemDetails)
                    {
                        ContentTypes =
                        {
                            ApiConstants.ProblemXml,
                            ApiConstants.ProblemJson
                        }
                    };
                };
            });

            collection.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));

            AddServices<TStartup>(collection);
        }

        public void AddServices<TStartup>(IServiceCollection collection)
        {
            //AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport", true);
            AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2Support", true);

            collection.AddLogging();
            collection.AddSingleton(Log.Logger);
            collection.AddResponseCompression();
            collection.AddCors();
            collection.AddControllers(options =>
                {
                    //options.CacheProfiles.Add(nameof(ImmutableCache), ImmutableCache.CreateCacheProfile());
                    //options.ModelBindingMessageProvider.SetValueMustNotBeNullAccessor(
                    //						_ => "The field is required.");
                })
                .AddJsonOptions(jsonOptions =>
                {
                    jsonOptions.JsonSerializerOptions.Converters.Add(new ObjectToInferredTypesConverter());
                    jsonOptions.JsonSerializerOptions.Converters.Add(new DictionaryTKeyGuidTValueConverter());
                })
                .AddControllersAsServices();

            collection.AddTransient<GlobalExceptionHandlerMiddleware>();

            collection.AddAutoMapper(new List<Assembly> { typeof(TStartup).Assembly }, ServiceLifetime.Scoped);

            collection.AddGrpc();
            collection.AddScoped<IUserProvider, UserProvider>();
            collection.AddHttpContextAccessor();
            collection.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            collection.AddSwaggerGen(c =>
            {
                c.SwaggerDoc(_swaggerConfig.Version, new OpenApiInfo { Title = _swaggerConfig.Title, Version = _swaggerConfig.Version });
                c.EnableAnnotations();
                c.CustomSchemaIds(x => x.FullName);
            });

            collection.AddSingleton<IInterpreter, Interpreter>();
            collection.AddSingleton<ISpecificationsFactory, SpecificationsFactory>();
            collection.AddSingleton<IDateTimeProvider, DateTimeProvider>();

            ConfigureMode(collection);

            AddAuthentication(collection);

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
            //    setup.Map<ValidationException>((ctx, ex) =>
            //    {
            //        var factory = ctx.RequestServices.GetRequiredService<ProblemDetailsFactory>();
            //        //ctx.Response.ContentType = MediaTypeNames.Application.Json;

            //        var errors = ex.Errors
            //                        .GroupBy(x => x.PropertyName)
            //                        .ToDictionary(
            //                            x => x.Key,
            //                            x => x.Select(x => x.ErrorMessage).ToArray());

            //        var response = factory.CreateValidationProblemDetails(ctx, errors);
            //        response.Instance = ctx.Request.Path;
            //        response.Detail = string.Join("\n", errors.Select(x => string.Join("\n", x.Value)));

            //        return response;
            //    });
            //    setup.Map<EntityNotFoundException>((ctx, ex) =>
            //    {
            //        var factory = ctx.RequestServices.GetRequiredService<ProblemDetailsFactory>();

            //        var errors = new Dictionary<string, string[]>();
            //        errors.Add("Entity", new[] { "Not Found" });

            //        var response = factory.CreateValidationProblemDetails(ctx, errors);
            //        response.Instance = ctx.Request.Path;
            //        response.Status = StatusCodes.Status404NotFound;
            //        response.Detail = string.Join("\n", errors.Select(x => string.Join("\n", x.Value)));

            //        return response;
            //    });
            //});

            //collection.Configure<ApiBehaviorOptions>(options =>
            //{
            //    options.SuppressModelStateInvalidFilter = true;

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
            //                ApiConstants.ProblemXml,
            //                ApiConstants.ProblemJson
            //            }
            //        };
            //    };
            //});

            var cultureInfo = new CultureInfo("en-US");
            CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
            CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;
        }

        public void AddDbContext<TContext>(
            IServiceCollection collection,
            IHostEnvironment environment,
            string devDbName,
            string dbName)
            where TContext : DbContext
        {
            //if (environment.IsDevelopment())
            //{
            collection.AddDbContextPool<TContext>(builder =>
                builder.UseNpgsql(_configuration.GetConnectionString(devDbName)));
            //}
            //else
            //{
            //    collection.AddDbContextPool<TContext>(b =>
            //        b.UseNpgsql(DbContextHelper.CreateServiceDefaultDbConnectionString(dbName)));
            //}
        }

        public void AddMigration<TContext>(
            IServiceCollection collection,
            IHostEnvironment environment,
            string devDbName,
            string dbName)
            where TContext : DbContext
        {
            var projectName = $"{_configuration.GetSection("BaseProjectName").Value}";

            collection
                .AddLogging(c => c.AddFluentMigratorConsole())
                .AddFluentMigratorCore()
                .ConfigureRunner(c => c.ScanIn()
                    .AddPostgres()
                    .WithGlobalConnectionString(_configuration.GetConnectionString(devDbName))
                    .ScanIn(Assembly.Load(projectName)).For.Migrations().For.EmbeddedResources());
        }

        public void SetupMiddlewarePipeline(IApplicationBuilder builder, IWebHostEnvironment env, Action<IEndpointRouteBuilder> grpcMapActions = null)
        {
            builder.UseRouting();

            builder.UseProblemDetails();

            //if (!env.IsDevelopment())
            //{
            builder.UseMiddleware<GlobalExceptionHandlerMiddleware>();
            //}

            //TODO only Up for now
            builder.Migrate();

            ApplyCorsPolicy(builder, env);

            //builder.UseAuthentication();
            //builder.UseAuthorization();

            //builder.UseStaticFiles();
            ////builder.UseCookiePolicy();

            //builder.UseEndpoints(routeBuilder =>
            //{
            //	grpcMapActions?.Invoke(routeBuilder);

            //	//routeBuilder.MapDefaultControllerRoute();
            //	//routeBuilder.MapControllers();
            //	//	.RequireAuthorization();
            //});

            builder.UseSwagger(c =>
            {
                // version 9 - no need
                //c.SerializeAsV2 = true;
            });
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            builder.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint(_swaggerConfig.Url, _swaggerConfig.Name);
                //c.RoutePrefix = string.Empty;
            });

            builder.UseResponseCompression();
        }

        private void AddAuthentication(IServiceCollection collection)
        {
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            collection
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
               .AddJwtBearer(options =>
               {
                   options.IncludeErrorDetails = true;
                   options.RequireHttpsMetadata = false;
                   options.SaveToken = true;
                   options.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidIssuer = _tokenOptions.Issuer,
                       ValidateLifetime = true,
                       ValidateAudience = false,
                       ValidateIssuer = true,
                       ValidateIssuerSigningKey = true,
                       IssuerSigningKey = _tokenOptions.SymmetricSigningKey,
                       NameClaimType = Claims.Subject,
                       RoleClaimType = Claims.Role
                   };
                   //options.Events = new JwtBearerEvents()
                   //{
                   //    OnMessageReceived = msg =>
                   //    {
                   //        var token = msg?.Request.Headers.Authorization.ToString();
                   //        string path = msg?.Request.Path ?? "";
                   //        if (!string.IsNullOrEmpty(token))

                   //        {
                   //            Console.WriteLine("Access token");
                   //            Console.WriteLine($"URL: {path}");
                   //            Console.WriteLine($"Token: {token}\r\n");
                   //        }
                   //        else
                   //        {
                   //            Console.WriteLine("Access token");
                   //            Console.WriteLine("URL: " + path);
                   //            Console.WriteLine("Token: No access token provided\r\n");
                   //        }
                   //        return Task.CompletedTask;
                   //    },
                   //    OnAuthenticationFailed = msg =>
                   //    {
                   //        var token = msg?.Request.Headers.Authorization.ToString();
                   //        string path = msg?.Request.Path ?? "";
                   //        if (!string.IsNullOrEmpty(token))
                   //        {
                   //            Console.WriteLine("Access token");
                   //            Console.WriteLine($"URL: {path}");
                   //            Console.WriteLine($"Token: {token}\r\n");
                   //        }
                   //        else
                   //        {
                   //            Console.WriteLine("Access token");
                   //            Console.WriteLine("URL: " + path);
                   //            Console.WriteLine("Token: No access token provided\r\n");
                   //        }
                   //        return Task.CompletedTask;
                   //    }
                   //};
               });
        }

        private static void ConfigureMode(IServiceCollection collection)
        {
            collection.AddSingleton<IAppConfiguration>(x => new AppConfiguration { Mode = AppMode.ReadWrite });
            //{
            //    var mode = Environment.GetEnvironmentVariable(EnvironmentVariables.ApplicationMode);
            //    return !string.IsNullOrEmpty(mode)
            //        ? new AppConfiguration { Mode = Enum.Parse<AppMode>(mode, true) }
            //        : new AppConfiguration { Mode = AppMode.ReadWrite };
            //});
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

    public static class MigrationExtension
    {
        public static IApplicationBuilder Migrate(this IApplicationBuilder app)
        {
            using var scope = app.ApplicationServices.CreateScope();
            var runner = scope.ServiceProvider.GetService<IMigrationRunner>();

            try
            {
                runner.ListMigrations();
                runner.MigrateUp();
            }
            catch
            {
                return app;
            }

            return app;
        }
    }
}
