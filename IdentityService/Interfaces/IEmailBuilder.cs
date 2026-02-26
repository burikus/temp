using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Dtos;
using Infrastructure.Emails.Infrastructure;

namespace IdentityService.Interfaces
{
    public interface IEmailBuilder
    {
        EmailMessage BuildAskMeEmailMessage(User userDetails, FeedbackMessageDto feedbackMessage);
        EmailMessage BuildConfirmAccountEmailMessage(string link, string[] To, string[] Cc = null);
        EmailMessage BuildResetPasswordEmailMessage(string link, string[] To, string[] Cc = null);
        EmailMessage BuildPasswordRestoreMessage(string[] To, object password, string[] Cc = null);
        EmailMessage BuildUserMessage(User userDetails, string userMessage);
    }
}
