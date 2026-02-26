using System;
using System.Threading.Tasks;

using IdentityService.Domain.Dtos;

namespace IdentityService.Domain.Interfaces
{
    public interface IAccountNotificationService
    {
        Task SendConfirmAccountEmailMessageAsync(NotificationRecipient user);
        Task AddRolesToUser(string userId, string email, string[] roles);
        Task PasswordRestoreMessageAsync(string email);
        Task SendUserMessageInternal(Guid userUid, string userMessage);
    }
}
