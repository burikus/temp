using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using Infrastructure.Emails.Infrastructure;

using Serilog;

using ILogger = Serilog.ILogger;

namespace Infrastructure.Emails
{

    public class EmailService : IEmailService
    {

        private readonly IMailboxRepository _mailboxRepository;
        private ILogger _logger = Log.ForContext<EmailService>();

        public EmailService(IMailboxRepository mailboxRepository)
        {
            _mailboxRepository = mailboxRepository ?? throw new ArgumentNullException(nameof(mailboxRepository));
        }

        public async Task SendEmailAsync(EmailMessage emailMessage)
        {
            try
            {
                await _mailboxRepository.EnqueueEmailAsync(new[] { emailMessage });
            }
            catch (Exception ex)
            {
                _logger.Error($"Send email failure: {ex.Message}");
            }
        }

        public async Task SendBulkEmailAsync(IEnumerable<EmailMessage> emailMessages)
        {
            try
            {
                await _mailboxRepository.EnqueueEmailAsync(emailMessages);
            }
            catch (Exception ex)
            {
                _logger.Error($"Send email failure: {ex.Message}");
            }
        }
    }
}
