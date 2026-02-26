using System.IdentityModel.Tokens.Jwt;
using System.Security.Authentication;
using System.Text.Json;

using Domain.AuthorizationPolicies.AuthorizationHandlers;
using Domain.AuthorizationPolicies.AuthorizationRequirements;
using Domain.Constants;
using Domain.DataAccess.UnitOfWork;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using FluentEmail.MailKitSmtp;

using FluentValidation;

using IdentityService.Areas.Identity;
using IdentityService.Automapping.Mapper;
using IdentityService.DataAccess;
using IdentityService.DataAccess.EntityFramework;
using IdentityService.DataAccess.UnitOfWork;
using IdentityService.Domain;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.MessageHandlers.Users;
using IdentityService.Extensions;
using IdentityService.IdentityData;
using IdentityService.Interfaces;
using IdentityService.Jobs;
using IdentityService.Messaging;
using IdentityService.Options;
using IdentityService.Providers;
using IdentityService.Services;

using Infrastructure.Emails;
using Infrastructure.Emails.Infrastructure;
using Infrastructure.Emails.Infrastructure.Extensions;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

using Quartz;

using Rebus.Config;
using Rebus.RabbitMq;
using Rebus.Routing.TypeBased;

using ServiceConfiguration.Helpers;
using ServiceConfiguration.Options.Identity;

namespace IdentityService
{
    public class IocBootstrapper
    {
        public static void RegisterServices(IConfiguration configuration, IServiceCollection services, ServiceAddresses serviceAddresses,
            AuthOptions tokenOptions, /*ScheduleOptions scheduleOptions,*/ IHostEnvironment environment, RabbitMqConfiguration rabbit)
        {
            var jwtOptions = new JwtOptions(tokenOptions.Issuer, tokenOptions.Audience, tokenOptions.Secret, tokenOptions.EncryptionSecret, tokenOptions.Lifetime);

            //services.AddProblemDetails(setup =>
            //{
            //    setup.IncludeExceptionDetails = (ctx, ex) =>
            //    {
            //        var env = ctx.RequestServices.GetRequiredService<IHostEnvironment>();
            //        return env.IsDevelopment();
            //    };
            //    setup.Rethrow<NotSupportedException>();
            //    setup.MapToStatusCode<UnauthorizedAccessException>(StatusCodes.Status401Unauthorized);
            //    setup.ValidationProblemStatusCode = StatusCodes.Status400BadRequest;
            //    //setup.Map<ValidationException>((ctx, ex) =>
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

            //services.Configure<ApiBehaviorOptions>(options =>
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

            services.Scan(selector => selector.FromAssemblies(typeof(IdentityServiceDescriptor).Assembly)
                .AddClasses(filter => filter.AssignableTo(typeof(AbstractValidator<>)))
                .AsImplementedInterfaces()
                .WithTransientLifetime());
            services.Scan(selector => selector.FromAssemblies(typeof(IdentityServiceDomainDescriptor).Assembly)
                .AddClasses(filter => filter.AssignableTo(typeof(AbstractValidator<>)))
                .AsImplementedInterfaces()
                .WithTransientLifetime());

            //services.AddMvc();
            services.AddRazorPages();

            //services.AddMvc();
            //.AddRazorPagesOptions(options =>
            //{
            //	//options.AllowAreas = true;
            //	options.Conventions.AuthorizeAreaFolder("Identity", "/Account/Manage");
            //	options.Conventions.AuthorizeAreaPage("Identity", "/Account/Logout");
            //});

            services.AddScoped<ILoginService, LoginService>();
            services.AddScoped<IUserService, UserQueriesAdapter>();
            services.AddScoped<ITokenProvider, TokenProvider>();

            services.AddSingleton<IAuthorizationHandler, AdminAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, UserAuthorizationHandler>();

            services.AddAuthorization(options =>
            {
                options.AddPolicy(AuthorizationPolicyConstants.AdminAuthorization, policy =>
                    {
                        policy.AuthenticationSchemes.Add(JwtBearerDefaults.AuthenticationScheme);
                        policy.Requirements.Add(new AdminAuthorizationRequirement());
                    });

                options.AddPolicy(AuthorizationPolicyConstants.UserAuthorization, policy =>
                    {
                        policy.AuthenticationSchemes.Add(JwtBearerDefaults.AuthenticationScheme);
                        policy.Requirements.Add(new UserAuthorizationRequirement());
                    });
            });

            services.AddControllers()
                .AddJsonOptions(jsonOptions =>
                {
                    jsonOptions.JsonSerializerOptions.Converters.Add(new DateTimeConverter());
                })
                .AddControllersAsServices()
                .AddXmlSerializerFormatters();

            services.AddScoped(typeof(IReadonlyRepository<>), typeof(ReadonlyRepository<>));
            services.AddScoped(typeof(IWriteonlyRepository<>), typeof(WriteonlyRepository<>));
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddSingleton(_ => new JwtSecurityTokenHandler());
            services.AddScoped<IMapper, Mapper>();

            services.AddSingleton<JwtOptions>(_ => jwtOptions);

            RegisterIdentity(services/*, jwtOptions*//*, scheduleOptions*/);

            RegisterRabbitMqServices(services, rabbit);

            services.AddScoped<SendEmailsJob>();
            services.AddScoped<EmailSenderJob<IdentityContext>>();
            services.AddScoped<EmailCleanerJob>();
            services.AddScoped<MarkExpiredEmailConfirmationsJob>();
            services.AddQuartz(opts =>
            {
                //opts.UseMicrosoftDependencyInjectionJobFactory();
                opts.UseSimpleTypeLoader();
                opts.UseInMemoryStore();

                opts.AddSendEmailsJobAndTrigger<SendEmailsJob>(configuration);
                opts.AddMailboxMessagesSenderJobAndTrigger<EmailSenderJob<IdentityContext>>(configuration);
                opts.AddMailboxMessagesCleanerJobAndTrigger<EmailCleanerJob>(configuration);
                opts.AddDeactivateUnverifiedAccountsJobAndTrigger<MarkExpiredEmailConfirmationsJob>(configuration);
            });
            services.AddQuartzHostedService(
                opts => opts.WaitForJobsToComplete = true);

            services.UseDbMailBoxService<MailboxRepository<IdentityContext>>(configuration);
            ConfigureEmail(services, configuration);

            AddAccountNotifications(services);
        }

        private static void RegisterIdentity(IServiceCollection services/*, JwtOptions jwtOptions*//*, ScheduleOptions scheduleOptions*/)
        {
            services
                .AddIdentity<User, Role>(
                //config =>
                //{
                //	config.Tokens.ProviderMap.Add("CustomEmailConfirmation",
                //			new TokenProviderDescriptor(typeof(CustomEmailConfirmationTokenProvider<IdentityProviderUser>)));
                //	config.Tokens.EmailConfirmationTokenProvider = "CustomEmailConfirmation";
                //}
                )
                .AddUserManager<UserManager>()
                .AddRoleManager<RoleManager<Role>>()
                .AddSignInManager<SignInManager<User>>()
                .AddClaimsPrincipalFactory<UserClaimsPrincipalFactory>()
                .AddEntityFrameworkStores<IdentityContext>()
                .AddDefaultTokenProviders();

            services.AddScoped<CustomEmailConfirmationTokenProvider<IdentityProviderUser>>();

            services.Configure<IdentityOptions>(options =>
            {
                options.ClaimsIdentity.UserNameClaimType = Claims.Name;
                options.ClaimsIdentity.EmailClaimType = Claims.Email;
                options.ClaimsIdentity.UserIdClaimType = Claims.Subject;
                options.ClaimsIdentity.RoleClaimType = Claims.Role;

                options.Password.RequireNonAlphanumeric = false;
            });

            services.AddScoped<IUserStore<User>, UserStore>();
            services.AddScoped<IIdentityUserStore<User>, UserStore>();
            services.AddScoped<IRoleStore<Role>, RoleStore>();
        }

        private static void ConfigureEmail(IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IFeedbackMessageService, FeedbackMessageService>();
            services.AddSingleton<IEmailBuilder, EmailBuilder>();
            services.Configure<EmailHostConfiguration>(configuration.GetSection(EmailHostConfiguration.SectionName));
            services
                .AddFluentEmail(defaultFromEmail: string.Empty)
                .AddRazorRenderer(typeof(Startup))
                .AddMailKitSender(configuration.GetSection(EmailHostConfiguration.SectionName).Get<SmtpClientOptions>());
        }

        public class DateTimeConverter : System.Text.Json.Serialization.JsonConverter<DateTime>
        {
            public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                return reader.GetDateTime().ToUniversalTime();
            }

            public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
            {
                writer.WriteStringValue(TimeZoneInfo.ConvertTimeFromUtc(value, TimeZoneInfo.Utc));
            }
        }

        private static void RegisterRabbitMqServices(IServiceCollection services, RabbitMqConfiguration rabbit)
        {
            var rabbitMqConfiguration = rabbit;

            services.AddRebusHandler<UserVerificationCompleteMessageHandler>();
            services.AddRebusHandler<UserVerificationExpiredMessageHandler>();
            services.AddRebusHandler<UserVerificationRequestMessageHandler>();
            services.AddRebusHandler<UserVerificationFailedMessageHandler>();

            var connectionString = rabbitMqConfiguration.ToConnectionString();
            var sslSettings = new SslSettings(
                rabbitMqConfiguration.SslEnabled,
                rabbitMqConfiguration.Hostname,
                version: SslProtocols.Tls12);

            services.AddRebus
            (
                configure =>
                    configure
                        .Routing(r =>
                            {
                                r.TypeBased()
                                    .MapAssemblyOf<UserVerificationCompleteMessage>(rabbitMqConfiguration.PubSubRoute)
                                    .MapAssemblyOf<UserVerificationExpiredMessage>(rabbitMqConfiguration.PubSubRoute)
                                    .MapAssemblyOf<UserVerificationRequestMessage>(rabbitMqConfiguration.PubSubRoute)
                                    .MapAssemblyOf<UserVerificationFailedMessage>(rabbitMqConfiguration.PubSubRoute);
                                //.MapAssemblyOf<RestorePasswordRequestMessage>(rabbitMqConfiguration.PubSubRoute);
                            }
                        )
                        .Transport(configurer =>
                        {
                            configurer
                                .UseRabbitMq(connectionString, rabbitMqConfiguration.UsersQueueName)
                                .Ssl(sslSettings)
                                .ExchangeNames(
                                    directExchangeName: rabbitMqConfiguration.DirectExchangeName,
                                    topicExchangeName: rabbitMqConfiguration.TopicExchangeName);
                        }
                        ),
                onCreated: async bus =>
                {
                    await bus.Advanced.Topics.Subscribe(rabbitMqConfiguration.PubSubRoute);
                    await bus.Subscribe<UserVerificationCompleteMessage>();
                    await bus.Subscribe<UserVerificationExpiredMessage>();
                    await bus.Subscribe<UserVerificationRequestMessage>();
                    await bus.Subscribe<UserVerificationFailedMessage>();
                    //await bus.Subscribe<RestorePasswordRequestMessage>();
                }
            );
        }

        public static void AddAccountNotifications(IServiceCollection services)
        {
            services.AddScoped<IAccountNotificationService, AccountNotificationService>();
            services.AddScoped<IAccountNotificationBuilder, AccountNotificationBuilder>();
            //services.Decorate<IAccountNotificationService, RetryableAccountNotificationServiceDecorator>();
            //services.Decorate<IAccountNotificationService, ExceptionPublishingAccountNotificationServiceDecorator>();
        }
    }
}
