using System.Collections.Concurrent;
using System.Data;

using Microsoft.EntityFrameworkCore;

using Newtonsoft.Json;

using Npgsql;

using NpgsqlTypes;

namespace IdentityService.Domain.Messaging
{
    public class OutboxMessageService<T> : IOutboxMessageService where T : DbContext
    {
        protected readonly T _context;
        protected readonly ConcurrentQueue<object> _messages;

        public OutboxMessageService(T context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _messages = new ConcurrentQueue<object>();
        }

        public void AddMessage(object message)
        {
            _messages.Enqueue(message);
        }

        public async Task SaveMessagesToDb()
        {
            var settings = new JsonSerializerSettings { TypeNameHandling = TypeNameHandling.All };

            object message;

            while (_messages.TryDequeue(out message))
            {
                var serializedMessage = JsonConvert.SerializeObject(message, Newtonsoft.Json.Formatting.None, settings);

                var dbParams = new NpgsqlParameter[] {
                    new  NpgsqlParameter()
                    {
                        ParameterName = "uid",
                        DbType = DbType.Guid,
                        Value = Guid.NewGuid()
                    },
                    new NpgsqlParameter()
                    {
                        ParameterName = "message",
                        NpgsqlDbType = NpgsqlDbType.Text,
                        Value = serializedMessage
                    }
                };

                var commandText =
                    $@"INSERT INTO svc_outbox.""Messages"" (""Uid"", ""Message"") VALUES (@uid, @message)";

                await _context.Database.ExecuteSqlRawAsync(commandText, dbParams);
            }
        }
    }
}
