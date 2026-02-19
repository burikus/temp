using System;

namespace Infrastructure.Emails.Infrastructure
{

    public class EmailRecord
    {
        public Guid Uid { get; init; }
        public string MessageData { get; init; }
        public bool IsSent { get; init; }
        public int AttemptsCount { get; init; }
        public DateTime? LastAttempt { get; init; }
    }

}
