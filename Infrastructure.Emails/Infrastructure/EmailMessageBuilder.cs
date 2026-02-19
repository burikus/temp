using System.Collections.Generic;
using System.IO;
using System.Linq;

using Domain.Extensions;

using FluentEmail.Core;
using FluentEmail.Core.Models;

namespace Infrastructure.Emails.Infrastructure
{
    public class EmailMessageBuilder
    {
        private readonly EmailData _emailData = new();

        public EmailMessageBuilder To(string[] addresses)
        {
            if (addresses.HasAny())
            {
                var to = new List<Address>();
                to.AddRange(addresses.Select(x => new Address(x)));
                _emailData.ToAddresses.AddRange(to);
            }

            return this;
        }

        public EmailMessageBuilder ReplyTo(string[]? addresses)
        {
            if (addresses.HasAny())
            {
                var to = new List<Address>();
                to.AddRange(addresses.Select(x => new Address(x)));
                _emailData.ReplyToAddresses.AddRange(to);
            }

            return this;
        }

        public EmailMessageBuilder From(string address, string? name = null)
        {
            _emailData.FromAddress = new Address(address, name);

            return this;
        }

        public EmailMessageBuilder Cc(string[]? addresses)
        {
            if (addresses.HasAny())
            {
                var cc = new List<Address>();
                cc.AddRange(addresses.Select(x => new Address(x)));
                _emailData.CcAddresses.AddRange(cc);
            }

            return this;
        }
        public EmailMessageBuilder Subject(string? subject)
        {
            _emailData.Subject = subject;

            return this;
        }

        public EmailMessageBuilder Body(string body, bool isHtml = true)
        {
            _emailData.Body = body;
            _emailData.IsHtml = isHtml;

            return this;
        }

        public EmailMessageBuilder Attachments(FormFileContents[] attachments)
        {
            if (attachments.HasAny())
            {
                foreach (var attachment in attachments)
                {
                    _emailData.Attachments.Add(new Attachment
                    {
                        Filename = attachment.FileName,
                        Data = new MemoryStream(attachment.Content)
                    });
                }
            }

            return this;
        }

        public EmailData Build()
        {
            return _emailData;
        }
    }
}
