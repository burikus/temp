using System.Data;
using System.Data.Common;

using Microsoft.EntityFrameworkCore;

using Newtonsoft.Json;

using Quartz;

using Rebus.Bus;

using static Domain.Utils.SystemObjects;

namespace IdentityService.Domain.Messaging
{
    [DisallowConcurrentExecution]
    public class OutboxMessagesSenderJob<T> : IJob where T : DbContext
    {
        protected readonly ILogger<OutboxMessagesSenderJob<T>> _logger;
        protected readonly T _context;
        protected readonly IBus _bus;
        protected readonly JsonSerializerSettings _settings = new() { TypeNameHandling = TypeNameHandling.All };

        public OutboxMessagesSenderJob(
            ILogger<OutboxMessagesSenderJob<T>> logger,
            T context,
            IBus bus
        )
        {
            _logger = RequireNotNull(logger, nameof(logger));
            _context = RequireNotNull(context, nameof(context));
            _bus = RequireNotNull(bus, nameof(bus));
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var jobName = GetType().Name;

            try
            {
                _logger.LogTrace("Starting {JobName} job...", jobName);

                var conn = _context.Database.GetDbConnection();

                if (conn.State != ConnectionState.Open) await conn.OpenAsync().ConfigureAwait(false);

                bool processedMessages = true;

                while (processedMessages)
                {
                    using (var tran = await conn.BeginTransactionAsync().ConfigureAwait(false))
                    {
                        var messages = await GetMessages(conn);

                        foreach (var msg in messages)
                        {
                            await SendMessage(msg);
                        }

                        tran.Commit();

                        processedMessages = messages.Count > 0;
                    }
                }

                _logger.LogTrace("Completed {JobName} job", jobName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception during processing {JobName} job", jobName);
            }
        }

        protected virtual async Task<IList<object>> GetMessages(DbConnection connection)
        {
            var messages = new List<object>();

            using (var command = connection.CreateCommand())
            {
                command.CommandText =
                    $@"
						DELETE FROM svc_outbox.""Messages""
						WHERE ""Id"" = any(array(SELECT ""Id"" FROM svc_outbox.""Messages"" ORDER BY ""Created"" ASC LIMIT 50))
						RETURNING ""Id"", ""Message"", ""Created"";
                    ";

                using (var reader = await command.ExecuteReaderAsync().ConfigureAwait(false))
                {
                    while (await reader.ReadAsync().ConfigureAwait(false))
                    {
                        var message = JsonConvert.DeserializeObject((string)reader["Message"], _settings);

                        messages.Add(message);
                    }
                }
            }

            return messages;
        }

        protected virtual async Task SendMessage(object message)
        {
            try
            {
                await _bus.Publish(message);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Error sending message during OutboxMessagesSenderJob");
                throw;
            }
        }
    }
}
