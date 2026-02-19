using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Threading.Tasks;

using Infrastructure.Emails.Infrastructure;

namespace Infrastructure.Emails
{
    public interface IMailboxRepository
    {
        Task EnqueueEmailAsync(IEnumerable<EmailMessage> emailMessages);
        Task<IEnumerable<EmailRecord>> GetMessagesToSend(DbConnection connection);
        Task MarkAsSended(DbConnection connection, IEnumerable<Guid> uids);
        Task SaveErrorAttempt(DbConnection connection, Dictionary<Guid, string> errorsDict);
        Task DeleteOutdatedAndFaulted();
    }
}
