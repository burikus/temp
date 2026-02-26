using System.Data;

using Domain.Interfaces;

using IdentityService.DataAccess.EntityFramework;
using IdentityService.Domain.Messaging;
using IdentityService.Messaging;
using IdentityService.Options;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

using Npgsql;

using Quartz;

namespace IdentityService.Jobs
{
    [DisallowConcurrentExecution]
    public class MarkExpiredEmailConfirmationsJob : IJob
    {
        private readonly ILogger<MarkExpiredEmailConfirmationsJob> _logger;
        private readonly IdentityContext _context;
        private readonly IDateTimeProvider _dateTimeProvider;
        private readonly EmailConfirmationTokenProviderOptions _tokenProviderOptions;
        private readonly OutboxMessageService<IdentityContext> _messageService;

        public MarkExpiredEmailConfirmationsJob(
            ILogger<MarkExpiredEmailConfirmationsJob> logger,
            IdentityContext context,
            IDateTimeProvider dateTimeProvider,
            IOptions<EmailConfirmationTokenProviderOptions> tokenProviderOptions
        )
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
            _tokenProviderOptions = tokenProviderOptions.Value ?? throw new ArgumentNullException(nameof(tokenProviderOptions));
            _messageService = new OutboxMessageService<IdentityContext>(_context);
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var jobName = GetType().Name;

            try
            {
                _logger.LogInformation("Starting {JobName} job...", jobName);
                var linkViabilityDate = _dateTimeProvider.UtcNow.Subtract(_tokenProviderOptions.TokenLifespan);

                await using var command = _context.Database.GetDbConnection().CreateCommand();
                command.CommandText = @"
                    UPDATE public.""AspNetUsers""
                    SET
                        ""EmailConfirmationExpired"" = true
                    WHERE
                        ""CreationEmailConfirmationLinkDate"" < @linkViabilityDate AND
                        ""EmailConfirmed"" = false AND
                        ""EmailConfirmationExpired"" = false
                    RETURNING ""Id"" as ""Uid"", ""Email"";";
                command.CommandType = CommandType.Text;
                command.Parameters.Add(new NpgsqlParameter("linkViabilityDate", linkViabilityDate));

                await _context.Database.OpenConnectionAsync();

                await using (var tran = await _context.Database.BeginTransactionAsync())
                {
                    await using (var result = await command.ExecuteReaderAsync())
                    {
                        while (await result.ReadAsync())
                        {
                            var uid = Guid.Parse(result.GetString(0));
                            var email = result.GetString(1);
                            _messageService.AddMessage(
                                new UserVerificationExpiredMessage
                                {
                                    Entity = new UserIdentity
                                    {
                                        Uid = uid,
                                        Email = email
                                    }
                                }
                            );
                        }
                    }

                    await _messageService.SaveMessagesToDb();
                    await tran.CommitAsync();
                }

                _logger.LogInformation("Completed {JobName} job", jobName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception during processing {JobName} job", jobName);
            }
        }
    }
}
