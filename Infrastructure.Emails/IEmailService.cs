using System.Collections.Generic;
using System.Threading.Tasks;

using Infrastructure.Emails.Infrastructure;

namespace Infrastructure.Emails
{
    public interface IEmailService
    {
        Task SendEmailAsync(EmailMessage emailMessage);
        Task SendBulkEmailAsync(IEnumerable<EmailMessage> emailMessages);
    }
}
