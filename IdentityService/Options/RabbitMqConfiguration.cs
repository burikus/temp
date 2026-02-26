using System.Web;

namespace IdentityService.Options
{
    public class RabbitMqConfiguration
    {
        private const string PlainProtocol = "amqps";
        private const string SecureProtocol = "amqps";

        public string Hostname { get; init; }
        public string Username { get; init; }
        public string Password { get; init; }
        public string Port { get; init; }
        public bool SslEnabled { get; init; }
        public string UsersQueueName { get; init; }
        public string DirectExchangeName { get; init; }
        public string TopicExchangeName { get; init; }
        public string PubSubRoute { get; init; }

        public string ToConnectionString()
        {
            var protocol = SslEnabled ? SecureProtocol : PlainProtocol;
            return $"{protocol}://{Username}:{HttpUtility.UrlEncode(Password)}@{Hostname}:{Port}";
        }
    }
}
