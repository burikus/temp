using Domain.Extensions;
using Domain.Interfaces;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Dtos;
using IdentityService.Interfaces;
using Infrastructure.Emails.Infrastructure;

using Microsoft.Extensions.Options;

namespace IdentityService.Services
{
    public class EmailBuilder : IEmailBuilder
    {
        private readonly EmailHostConfiguration _emailHostConfiguration;
        private readonly IDateTimeProvider _dateTimeProvider;

        public EmailBuilder(IOptions<EmailHostConfiguration> emailHostConfiguration, IDateTimeProvider dateTimeProvider)
        {
            _emailHostConfiguration = emailHostConfiguration.Value;
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
        }

        public EmailMessage BuildAskMeEmailMessage(User userDetails, FeedbackMessageDto feedbackMessage)
        {
            var template = @"IdentityService.Templates.AskMeEmail.cshtml";

            var data = new Dictionary<string, string>
            {
                { "UserName", userDetails.UserName },
                { "UserEmail", userDetails.Email },
                { "FeedbackMessage", feedbackMessage.Message },
                { "AskedDateTime", feedbackMessage.AskedDateTime.ToString("MM/dd/yyyy HH:mm")}
            };

            var message = new EmailMessage(
                _emailHostConfiguration.From, _emailHostConfiguration.To, new[] { userDetails.Email }, null /*_emailHostConfiguration.Cc*/, body: null, template, data)
            {
                Subject = $"User {userDetails.UserName} Feedback",
            };

            return message;
        }

        public EmailMessage BuildConfirmAccountEmailMessage(string link, string[] To, string[] Cc = null)
        {
            var template = @"IdentityService.Templates.ConfirmAccount.cshtml";

            var data = new Dictionary<string, string>
            {
                { "Link", link },
                { "Title", "Подтвердите свою регистрацию" },
                { "BaseUri", _emailHostConfiguration.BaseUri }
            };

            var message = new EmailMessage(_emailHostConfiguration.From, To, null, Cc, body: null, template, data)
            {
                Subject = "Подтверждение регистрации на сайте.",
                SenderName = "slim-logistics.ru"
            };

            return message;
        }

        public EmailMessage BuildPasswordRestoreMessage(string[] To, object password, string[] Cc = null)
        {
            var template = @"IdentityService.Templates.PasswordRestore.cshtml";

            var data = new Dictionary<string, string>
            {
                { "Password", password.ToString() },
                { "SentDateTime", _dateTimeProvider.UtcNow.ToString("MM/dd/yyyy HH:mm")}
            };

            var message = new EmailMessage(_emailHostConfiguration.From, To, null, Cc, body: null, template, data)
            {
                Subject = "Текущий пароль сайта slim-logistics.RU",
                SenderName = "slim-logistics.ru"
            };

            return message;
        }

        public EmailMessage BuildResetPasswordEmailMessage(string link, string[] To, string[] Cc = null)
        {
            var template = @"IdentityService.Templates.ResetPassword.cshtml";

            var data = new Dictionary<string, string>
            {
                { "Link", link },
                { "Title", "Установите новый пароль" },
                { "BaseUri", _emailHostConfiguration.BaseUri }
            };

            var message = new EmailMessage(_emailHostConfiguration.From, To, null, Cc, body: null, template, data)
            {
                Subject = "Установка нового пароля.",
                SenderName = "slim-logistics.ru"
            };

            return message;
        }

        public EmailMessage BuildUserMessage(User userDetails, string userMessage)
        {
            var template = @"IdentityService.Templates.AskMeEmail.cshtml";

            var data = new Dictionary<string, string>
            {
                { "UserName", userDetails.UserName },
                { "UserEmail", userDetails.Email },
                { "FeedbackMessage", userMessage },
                { "AskedDateTime", _dateTimeProvider.UtcNow.ToString("MM/dd/yyyy HH:mm")}
            };

            var message = new EmailMessage(
                _emailHostConfiguration.From, _emailHostConfiguration.To, new[] { userDetails.Email }, _emailHostConfiguration.Cc, body: null, template, data)
            {
                Subject = $"User {userDetails.UserName} Message",
            };

            return message;
        }
    }
}
