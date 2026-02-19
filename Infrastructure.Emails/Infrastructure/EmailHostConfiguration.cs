using MailKit.Security;

namespace Infrastructure.Emails.Infrastructure
{
    public class EmailHostConfiguration
    {
        public EmailHostConfiguration()
        {
            HostSecureSocketOptions = SecureSocketOptions.StartTls;
        }

        public const string SectionName = "EmailHostConfiguration";
        public string From { get; init; }
        public string[] To { get; init; }
        public string[]? Cc { get; init; }
        public string Server { get; init; }
        public int Port { get; init; }
        public SecureSocketOptions HostSecureSocketOptions { get; set; }
        public string User { get; init; }
        public string Password { get; init; }
        public string? Title { get; init; }
        public string? Template { get; init; }
        public string BaseUri { get; init; }

        public bool UseSsl { get; init; }
        public bool RequiresAuthentication { get; init; }
        public string PreferredEncoding { get; init; } = string.Empty;
        public int MaxRetryCount { get; init; }
        public int KeepUnsentEmailsDays { get; init; }
        public int KeepSentEmailsDays { get; init; }
    }
}
