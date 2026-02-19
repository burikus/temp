using System.Data;
using System.Data.Common;
using System.Text.Json;

using Infrastructure.Emails.Infrastructure;

using Microsoft.EntityFrameworkCore;

using Npgsql;

namespace Infrastructure.Emails
{
    public class MailboxRepository<TContext> : IMailboxRepository where TContext : DbContext
    {
        private readonly EmailHostConfiguration _hostConfiguration;
        private readonly DbConnection _connection;

        public MailboxRepository(
            TContext dataContext,
            EmailHostConfiguration hostConfiguration)
        {
            _hostConfiguration = hostConfiguration ?? throw new ArgumentNullException(nameof(hostConfiguration));

            if (dataContext == null)
            {
                throw new ArgumentNullException(nameof(dataContext));
            }

            dataContext.Database.OpenConnection();
            _connection = dataContext.Database.GetDbConnection();
        }

        public async Task EnqueueEmailAsync(IEnumerable<EmailMessage> emailMessages)
        {
            if (emailMessages.Count() == 0)
            {
                return;
            }

            var emails = emailMessages.ToList();

            while (emails.Count > 0)
            {
                var currentEmails = emails.Take(10).ToList();
                emails.RemoveAll(c => currentEmails.Contains(c));

                await using var command = _connection.CreateCommand();
                command.CommandType = CommandType.Text;
                int number = 0;

                foreach (var email in currentEmails)
                {
                    command.CommandText += $@"
                        INSERT INTO svc_mailbox.""EMails"" (""Uid"", ""MessageData"") VALUES (@uid{number}, @message{number});
                    ";

                    command.Parameters.Add(new NpgsqlParameter("@uid" + number, Guid.NewGuid()));
                    command.Parameters.Add(new NpgsqlParameter("@message" + number, JsonSerializer.Serialize(email)));

                    number++;
                }

                await command.ExecuteNonQueryAsync();
            }

            return;
        }

        public async Task<IEnumerable<EmailRecord>> GetMessagesToSend(DbConnection connection)
        {
            var emails = new List<EmailRecord>();

            await using var command = connection.CreateCommand();

            command.CommandText = $@"
                SELECT
                 ""Uid"",
                    ""MessageData"",
                 ""IsSent"",
                 ""AttemptsCount"",
                 ""LastAttempt""
                FROM svc_mailbox.""EMails""
                WHERE
                    ""IsSent"" = false AND
                    ""AttemptsCount"" <= {_hostConfiguration.MaxRetryCount} AND
                    ""Created"" >= NOW() - (INTERVAL '1 day' * {_hostConfiguration.KeepUnsentEmailsDays})
                FOR UPDATE SKIP LOCKED
            ";
            command.CommandType = CommandType.Text;

            using var result = await command.ExecuteReaderAsync();

            while (await result.ReadAsync())
            {
                emails.Add(new EmailRecord
                {
                    Uid = result.GetGuid(0),
                    MessageData = result.GetString(1),
                    IsSent = result.GetBoolean(2),
                    AttemptsCount = result.GetInt32(3),
                    LastAttempt = result.IsDBNull(4) ? null : result.GetDateTime(4),
                });
            }

            return emails.ToArray();
        }

        public async Task MarkAsSended(DbConnection connection, IEnumerable<Guid> uids)
        {
            if (uids.Count() == 0)
            {
                return;
            }

            await using var command = connection.CreateCommand();
            command.CommandText = $@"
                UPDATE svc_mailbox.""EMails""
                SET
                    ""IsSent"" = true,
                    ""LastAttempt"" = NOW(),
                    ""LastAttemptError"" = null,
                    ""AttemptsCount"" = ""AttemptsCount"" + 1
                WHERE ""Uid"" = ANY (@ids)
            ";
            command.CommandType = CommandType.Text;
            command.Parameters.Add(new NpgsqlParameter("@ids", uids));

            await command.ExecuteNonQueryAsync();

            return;
        }

        public async Task SaveErrorAttempt(DbConnection connection, Dictionary<Guid, string> errorsDict)
        {
            if (errorsDict.Count == 0)
            {
                return;
            }

            var errors = new List<Guid>(errorsDict.Select(x => x.Key));

            while (errors.Count > 0)
            {
                var currentErrors = errors.Take(50).ToList();
                errors.RemoveAll(c => currentErrors.Contains(c));

                await using var command = connection.CreateCommand();
                command.CommandType = CommandType.Text;
                int number = 0;

                foreach (var error in currentErrors)
                {
                    var uid = error;
                    var errorMessage = errorsDict[uid];

                    command.CommandText += $@"
				        UPDATE svc_mailbox.""EMails""
                        SET ""IsSent"" = false, ""LastAttempt"" = NOW(), ""LastAttemptError"" = @msg{number}, ""AttemptsCount"" = ""AttemptsCount"" + 1
                        WHERE ""Uid"" = @uid{number};
                    ";
                    command.Parameters.Add(new NpgsqlParameter("@uid" + number, uid));
                    command.Parameters.Add(new NpgsqlParameter("@msg" + number, errorMessage));

                    number++;
                }

                await command.ExecuteNonQueryAsync();
            }

            return;
        }

        public async Task DeleteOutdatedAndFaulted()
        {
            await using var command = _connection.CreateCommand();
            command.CommandText = $@"
				DELETE FROM svc_mailbox.""EMails""
                WHERE (""IsSent"" AND ""Created"" < NOW() - (INTERVAL '1 day' * {_hostConfiguration.KeepSentEmailsDays}))
                       OR (""IsSent"" = false AND ""Created"" < NOW() - (INTERVAL '1 day' * {_hostConfiguration.KeepUnsentEmailsDays}))
            ";
            command.CommandType = CommandType.Text;

            await command.ExecuteNonQueryAsync();

            return;
        }

    }

}
