using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;

using Infrastructure.Emails.Infrastructure;

using FluentEmail.Core;
using FluentEmail.Core.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

using Quartz;

using static Domain.Utils.SystemObjects;

namespace Infrastructure.Emails
{
    [DisallowConcurrentExecution]
    public class EmailSenderJob<TContext> : IJob where TContext : DbContext
    {
        private readonly ILogger<EmailSenderJob<TContext>> _logger;
        private readonly TContext _context;
        private readonly IMailboxRepository _mailboxRepository;
        private readonly IFluentEmail _fluentEmail;

        public EmailSenderJob(
            ILogger<EmailSenderJob<TContext>> logger,
            TContext context,
            IMailboxRepository mailboxRepository,
            IFluentEmail fluentEmail
        )
        {
            _logger = RequireNotNull(logger, nameof(logger));
            _context = RequireNotNull(context, nameof(context));
            _mailboxRepository = RequireNotNull(mailboxRepository, nameof(mailboxRepository));
            _fluentEmail = RequireNotNull(fluentEmail, nameof(fluentEmail));
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var jobName = GetType().Name;

            try
            {
                _logger.LogInformation("Starting {JobName} job...", jobName);
                await _context.Database.OpenConnectionAsync().ConfigureAwait(false);
                var connection = _context.Database.GetDbConnection();

                await _context.Database.BeginTransactionAsync().ConfigureAwait(false);

                var messageRecords = await _mailboxRepository.GetMessagesToSend(connection);
                var emailMessages = messageRecords.ToDictionary(
                    msgRecord => msgRecord.Uid,
                    msgRecord => JsonSerializer.Deserialize<EmailMessage>(msgRecord.MessageData)
                );

                var sentEmails = new List<Guid>();
                var failedEmails = new Dictionary<Guid, string>();

                foreach (var (emailUid, email) in emailMessages)
                {
                    try
                    {
                        SendResponse response;

                        var emailMessage =
                            new EmailMessageBuilder()
                                .From(email.From, email.SenderName)
                                .To(email.To)
                                .ReplyTo(email.ReplyTo)
                                .Cc(email.Cc)
                                .Subject(email.Subject)
                                .Body(email.Body)
                                .Attachments(email.Attachments)
                                .Build();

                        _fluentEmail.Data = emailMessage;

                        if (string.IsNullOrEmpty(email.Body))
                        {
                            var assembly = Assembly.GetEntryAssembly();

                            response = email.Newsletter == null
                                ? await _fluentEmail
                                .UsingTemplateFromEmbedded(email.Template, email.Data, assembly)
                                .SendAsync()
                                : await _fluentEmail
                                .UsingTemplateFromEmbedded(email.Template, email.Newsletter, assembly)
                                .SendAsync();
                        }
                        else
                        {
                            response = await _fluentEmail.SendAsync();
                        }

                        if (response.Successful)
                            sentEmails.Add(emailUid);
                        else
                            failedEmails.Add(emailUid, string.Join("; ", response.ErrorMessages));
                    }
                    catch (Exception ex)
                    {
                        failedEmails.Add(emailUid, ex.Message);
                    }
                }

                await _mailboxRepository.MarkAsSended(connection, sentEmails);
                await _mailboxRepository.SaveErrorAttempt(connection, failedEmails);

                await _context.Database.CommitTransactionAsync();
                _logger.LogInformation("Completed {JobName} job", jobName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception during processing {JobName} job", jobName);
            }
        }
    }
}
