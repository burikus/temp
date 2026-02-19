using System;
using System.Threading.Tasks;

using Microsoft.Extensions.Logging;

using Quartz;

using static Domain.Utils.SystemObjects;

namespace Infrastructure.Emails
{
    [DisallowConcurrentExecution]
    public class EmailCleanerJob : IJob
    {
        private readonly ILogger<EmailCleanerJob> _logger;
        private readonly IMailboxRepository _mailboxRepository;

        public EmailCleanerJob(
            ILogger<EmailCleanerJob> logger,
            IMailboxRepository mailboxRepository
        )
        {
            _logger = RequireNotNull(logger, nameof(logger));
            _mailboxRepository = RequireNotNull(mailboxRepository, nameof(mailboxRepository));
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var jobName = GetType().Name;

            try
            {
                _logger.LogInformation("Starting {JobName} job...", jobName);
                await _mailboxRepository.DeleteOutdatedAndFaulted();
                _logger.LogInformation("Completed {JobName} job", jobName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception during processing {JobName} job", jobName);
            }
        }
    }
}
