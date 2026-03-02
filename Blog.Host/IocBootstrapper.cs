using Blog.Core.DataAccess.Queries;
using Blog.Core.DataAccess.Repositories;
using Blog.Core.DataAccess.UnitOfWork;
using Blog.Core.Services;
using Blog.Core.Services.Contracts;
using Blog.Domain.DataAccess.Queries.Contracts;
using Blog.Domain.DataAccess.Repositories;

using Domain.AuthorizationPolicies.AuthorizationHandlers;
using Domain.AuthorizationPolicies.AuthorizationRequirements;
using Domain.Constants;
using Domain.DataAccess.UnitOfWork;

using Microsoft.AspNetCore.Authorization;

using Quartz;

using ServiceConfiguration.Helpers;

namespace Blog.Host
{
    public class IocBootstrapper
    {
        public static void RegisterServices(IServiceCollection services, ServiceAddresses serviceAddresses, IConfiguration configuration)
        {
            services.AddMemoryCache();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            RegisterServices(services);
            RegisterDataAccess(services);


            //services.AddScoped<IIdentityServiceDataProvider, IdentityServiceDataProvider>();
            //services.AddScoped<IProcessImageService, ProcessImageService>();

            //services.AddValidatorsFromAssembly(typeof(ArtsServiceDescriptor).Assembly);
            //services.AddValidatorsFromAssembly(typeof(ArtsServiceDomainDescriptor).Assembly);

            services.AddSingleton<IAuthorizationHandler, AdminAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, UserAuthorizationHandler>();
            services.AddAuthorization(options =>
            {
                options.AddPolicy(AuthorizationPolicyConstants.AdminAuthorization, policy =>
                    policy.Requirements.Add(new AdminAuthorizationRequirement()));

                options.AddPolicy(AuthorizationPolicyConstants.UserAuthorization, policy =>
                    policy.Requirements.Add(new UserAuthorizationRequirement()));
            });

            //services.AddGrpcClient<UserDataService.UserDataServiceClient>(o =>
            //    o.Address = new Uri(serviceAddresses.IdentityService));

            //services.AddScoped<SendNewsletterJob>();
            //services.AddScoped<EmailSenderJob<blogContext>>();
            //services.AddScoped<EmailCleanerJob>();

            services.AddQuartz(opts =>
            {
                //opts.UseMicrosoftDependencyInjectionJobFactory();
                opts.UseSimpleTypeLoader();
                opts.UseInMemoryStore();

                //opts.AddSendEmailsJobAndTrigger<SendNewsletterJob>(configuration);
                //opts.AddMailboxMessagesSenderJobAndTrigger<EmailSenderJob<blogContext>>(configuration);
                //opts.AddMailboxMessagesCleanerJobAndTrigger<EmailCleanerJob>(configuration);
            });
            services.AddQuartzHostedService(
                opts => opts.WaitForJobsToComplete = true);

            //services.UseDbMailBoxService<MailboxRepository<blogContext>>(configuration);
        }

        private static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IBackgroundService, Core.Services.BackgroundService>();
            services.AddScoped<IInfoService, InfoService>();
            services.AddScoped<IMenuService, MenuService>();
            services.AddScoped<IMicroBlogService, MicroBlogService>();
            services.AddScoped<ITextFormattingService, TextFormattingService>();
            services.AddScoped<ISwipperService, SwipperService>();

            services.AddScoped<IProcessImageService, ProcessImageService>();
        }

        private static void RegisterDataAccess(IServiceCollection services)
        {
            services.AddScoped<IMicroBlogQuery, MicroBlogQuery>();
            services.AddScoped<IBackgroundQuery, BackgroundQuery>();
            services.AddScoped<IMenuQuery, MenuQuery>();
            services.AddScoped<ITextFormattingQuery, TextFormattingQuery>();
            services.AddScoped<IInfoQuery, InfoQuery>();
            services.AddScoped<ISwipperQuery, SwipperQuery>();

            services.AddScoped<ISwipperRepository, SwipperRepository>();
            services.AddScoped<IMicroBlogRepository, MicroBlogRepository>();
            services.AddScoped<IBackgroundRepository, BackgroundRepository>();
            services.AddScoped<IMenuRepository, MenuRepository>();
            services.AddScoped<ITextFormattingRepository, TextFormattingRepository>();
            services.AddScoped<IInfoRepository, InfoRepository>();
        }
    }
}
