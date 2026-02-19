using Domain.AuthorizationPolicies.AuthorizationHandlers;
using Domain.AuthorizationPolicies.AuthorizationRequirements;
using Domain.Constants;
using Domain.DataAccess.UnitOfWork;

using Microsoft.AspNetCore.Authorization;

using Quartz;

using ServiceConfiguration.Helpers;

using Stamp.Core.DataAccess.Queries;
using Stamp.Core.DataAccess.Repositories;
using Stamp.Core.Services;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;
using Stamp.Domain.DataAccess.UnitOfWork;

namespace Stamp.Host
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
            //services.AddScoped<EmailSenderJob<stampContext>>();
            //services.AddScoped<EmailCleanerJob>();

            services.AddQuartz(opts =>
            {
                //opts.UseMicrosoftDependencyInjectionJobFactory();
                opts.UseSimpleTypeLoader();
                opts.UseInMemoryStore();

                //opts.AddSendEmailsJobAndTrigger<SendNewsletterJob>(configuration);
                //opts.AddMailboxMessagesSenderJobAndTrigger<EmailSenderJob<stampContext>>(configuration);
                //opts.AddMailboxMessagesCleanerJobAndTrigger<EmailCleanerJob>(configuration);
            });
            services.AddQuartzHostedService(
                opts => opts.WaitForJobsToComplete = true);

            //services.UseDbMailBoxService<MailboxRepository<stampContext>>(configuration);
        }

        private static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<ICatalogService, CatalogService>();
            services.AddScoped<ICountryService, CountryService>();
            services.AddScoped<IPaperService, PaperService>();
            services.AddScoped<IPerforationService, PerforationService>();
            services.AddScoped<IPictureService, PictureService>();
            services.AddScoped<IPrintTypeService, PrintTypeService>();
            services.AddScoped<IRasterService, RasterService>();
            services.AddScoped<IStampInfoService, StampInfoService>();
            services.AddScoped<IStampSeriesService, StampSeriesService>();
            services.AddScoped<IStampTypeService, StampTypeService>();
            services.AddScoped<ISubThemeService, SubThemeService>();
            services.AddScoped<IThemeService, ThemeService>();
            services.AddScoped<IWatermarkService, WatermarkService>();
            services.AddScoped<IMenuService, MenuService>();
            services.AddScoped<ITextFormattingService, TextFormattingService>();
            services.AddScoped<IFavouriteService, FavouriteService>();

            services.AddScoped<IProcessImageService, ProcessImageService>();
        }

        private static void RegisterDataAccess(IServiceCollection services)
        {
            services.AddScoped<ICatalogQuery, CatalogQuery>();
            services.AddScoped<StampCatalogQuery, StampCatalogQuery>();
            services.AddScoped<ICountryQuery, CountryQuery>();
            services.AddScoped<IPaperQuery, PaperQuery>();
            services.AddScoped<IPerforationQuery, PerforationQuery>();
            services.AddScoped<IPictureQuery, PictureQuery>();
            services.AddScoped<IPrintTypeQuery, PrintTypeQuery>();
            services.AddScoped<IRasterQuery, RasterQuery>();
            services.AddScoped<IStampInfoQuery, StampInfoQuery>();
            services.AddScoped<IStampSeriesQuery, StampSeriesQuery>();
            services.AddScoped<IStampTypeQuery, StampTypeQuery>();
            services.AddScoped<ISubThemeQuery, SubThemeQuery>();
            services.AddScoped<IThemeQuery, ThemeQuery>();
            services.AddScoped<IWatermarkQuery, WatermarkQuery>();
            services.AddScoped<IPictureSettingQuery, PictureSettingQuery>();
            services.AddScoped<IBackgroundQuery, BackgroundQuery>();
            services.AddScoped<IMenuQuery, MenuQuery>();
            services.AddScoped<ITextFormattingQuery, TextFormattingQuery>();
            services.AddScoped<IFavouriteQuery, FavouriteQuery>();

            services.AddScoped<ICatalogRepository, CatalogRepository>();
            services.AddScoped<IStampCatalogRepository, StampCatalogRepository>();
            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IPaperRepository, PaperRepository>();
            services.AddScoped<IPerforationRepository, PerforationRepository>();
            services.AddScoped<IPictureRepository, PictureRepository>();
            services.AddScoped<IPrintTypeRepository, PrintTypeRepository>();
            services.AddScoped<IRasterRepository, RasterRepository>();
            services.AddScoped<IStampInfoRepository, StampInfoRepository>();
            services.AddScoped<IStampSeriesRepository, StampSeriesRepository>();
            services.AddScoped<IStampTypeRepository, StampTypeRepository>();
            services.AddScoped<ISubThemeRepository, SubThemeRepository>();
            services.AddScoped<IThemeRepository, ThemeRepository>();
            services.AddScoped<IWatermarkRepository, WatermarkRepository>();
            services.AddScoped<IPictureSettingRepository, PictureSettingRepository>();
            services.AddScoped<IBackgroundRepository, BackgroundRepository>();
            services.AddScoped<IMenuRepository, MenuRepository>();
            services.AddScoped<ITextFormattingRepository, TextFormattingRepository>();
            services.AddScoped<IFavouriteRepository, FavouriteRepository>();
        }
    }
}
