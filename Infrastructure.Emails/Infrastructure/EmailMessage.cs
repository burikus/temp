using System.Collections.Generic;

namespace Infrastructure.Emails.Infrastructure
{
    public record EmailMessage
    {
        public EmailMessage()
        {
        }

        public EmailMessage(
            string from, string[] to, string[]? replyTo = null, string[]? cc = null,
            string? body = null,
            string? template = null,
            Dictionary<string, string>? data = null)
        {
            From = from;
            To = to;
            ReplyTo = replyTo ?? new string[] { };
            Cc = cc ?? new string[] { };
            Body = body;
            Data = data;
            Template = template;
        }

        public EmailMessage(
            string from, string[] to, string[]? replyTo = null, string[]? cc = null,
            string? body = null,
            string? template = null,
            NewsletterContent newsletter = null)
        {
            From = from;
            To = to;
            ReplyTo = replyTo ?? new string[] { };
            Cc = cc ?? new string[] { };
            Body = body;
            Template = template;
            Newsletter = newsletter;
        }

        public string From { get; init; }
        public string[] To { get; init; }
        public string[]? ReplyTo { get; init; }
        public string[]? Cc { get; init; }
        public string? SenderName { get; init; }
        public string? Subject { get; init; }
        public string? Title { get; init; }
        public string? Body { get; init; }
        public string? Template { get; init; }
        public Dictionary<string, string>? Data { get; init; }
        public FormFileContents[]? Attachments { get; init; }
        public NewsletterContent Newsletter { get; init; }
    }
}
