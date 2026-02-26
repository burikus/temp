using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Interfaces;

using System;
using System.Threading.Tasks;

namespace IdentityService.Services
{
    //public class RetryableAccountNotificationServiceDecorator : AccountNotificationServiceDecorator
    //{
    //    public RetryableAccountNotificationServiceDecorator(IAccountNotificationService decoratee) : base(decoratee)
    //    {
    //    }

    //    public override Task SendConfirmAccountEmailMessageAsync(NotificationRecipient user)
    //    {
    //        return Decoratee.SendConfirmAccountEmailMessageAsync(user);
    //    }

    //    public override Task AddRolesToUser(string userId,string email, string[] roles)
    //    {
    //        return Decoratee.SendConfirmAccountEmailMessageAsync(new NotificationRecipient(new Guid(userId), email));  
    //    }
    //}
}
