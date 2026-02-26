using Quartz;

namespace IdentityService.Extensions
{
    public static class ServiceCollectionQuartzConfiguratorExtensions
    {
        public static void AddSendEmailsJobAndTrigger<T>(this IServiceCollectionQuartzConfigurator quartz, IConfiguration config)
            where T : IJob
        {
            if (Int32.TryParse(config.GetSection("SendEmailsIntervalInMin").Value, out int timeout) && timeout > 0)
            {
                string jobName = typeof(T).Name;
                var jobKey = new JobKey(jobName);
                quartz.AddJob<T>(opts => opts.WithIdentity(jobKey));

                quartz.AddTrigger(opts => opts
                    .ForJob(jobKey)
                    .WithSimpleSchedule(x => x
                            .WithIntervalInMinutes(timeout)
                            .RepeatForever()));
            }
        }

        public static void AddDeactivateUnverifiedAccountsJobAndTrigger<T>(this IServiceCollectionQuartzConfigurator quartz, IConfiguration config)
            where T : IJob
        {
            if (int.TryParse(config.GetSection("CheckExpiredEmailVerificationsJobIntervalInMinutes").Value, out int timeout) && timeout > 0)
            {
                string jobName = typeof(T).Name;
                var jobKey = new JobKey(jobName);
                quartz.AddJob<T>(opts => opts.WithIdentity(jobKey));

                quartz.AddTrigger(opts => opts
                    .ForJob(jobKey)
                    .WithSimpleSchedule(x => x
                        .WithIntervalInMinutes(timeout)
                        .RepeatForever()));
            }
        }
    }
}
