using Microsoft.Extensions.Configuration;

using Quartz;

namespace Infrastructure.Emails.Infrastructure.Extensions
{
    public static class MailboxMessagesSenderQuartzConfiguratorExtensions
    {
        public static void AddMailboxMessagesSenderJobAndTrigger<T>(
            this IServiceCollectionQuartzConfigurator quartz,
            IConfiguration config) where T : IJob
        {
            if (int.TryParse(config.GetSection("EmailHostConfiguration:SenderIntevalInSec").Value, out int timeout) && timeout > 0)
            {
                string jobName = typeof(T).Name;
                var jobKey = new JobKey(jobName);
                quartz.AddJob<T>(opts => opts.WithIdentity(jobKey));

                quartz.AddTrigger(opts => opts
                    .ForJob(jobKey)
                    .WithSimpleSchedule(x => x
                            .WithIntervalInSeconds(timeout)
                            .RepeatForever()));
            }
        }

        public static void AddMailboxMessagesCleanerJobAndTrigger<T>(
            this IServiceCollectionQuartzConfigurator quartz,
            IConfiguration config) where T : IJob
        {
            if (int.TryParse(config.GetSection("EmailHostConfiguration:CleanerIntevalInMin").Value, out int timeout) && timeout > 0)
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
