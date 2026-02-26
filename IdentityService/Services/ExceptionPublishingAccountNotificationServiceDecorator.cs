//using IdentityService.Domain.Dtos;
//using IdentityService.Domain.Interfaces;
//using IdentityService.Domain.Messaging;
//using IdentityService.Messaging;
//using IdentityService.DataAccess.EntityFramework;

//using System.Threading.Tasks;
//using System;
//using IdentityService.Domain.Enums;
//using IdentityService.Models;

//namespace IdentityService.Services
//{
//    //public class ExceptionPublishingAccountNotificationServiceDecorator : AccountNotificationServiceDecorator
//    //{
//    //    private readonly OutboxMessageService<IdentityContext> _messageService;
//    //    //private readonly IUserEventLogger _eventLogger;

//    //    public ExceptionPublishingAccountNotificationServiceDecorator(IAccountNotificationService decoratee, IdentityContext context/*, IUserEventLogger eventLogger*/) : base(decoratee)
//    //    {
//    //        _messageService = new OutboxMessageService<IdentityContext>(context);
//    //        //_eventLogger = eventLogger ?? throw new ArgumentNullException(nameof(eventLogger));
//    //    }

//    //    public override async Task SendConfirmAccountEmailMessageAsync(NotificationRecipient user)
//    //    {
//    //        try
//    //        {
//    //            await Decoratee.SendConfirmAccountEmailMessageAsync(user);
//    //        }
//    //        catch (Exception)
//    //        {
//    //            await RaiseUserVerificationFailedEvent(user);
//    //            throw;
//    //        }
//    //    }

//    //    public override async Task AddRolesToUser(string userId, string email, string[] roles)
//    //    {
//    //        try
//    //        {
//    //            await Decoratee.AddRolesToUser(userId, email, roles);
//    //        }
//    //        catch (Exception)
//    //        {
//    //            await RaiseUserVerificationFailedEvent(new NotificationRecipient(new Guid(userId), email));  
//    //            throw;
//    //        }
//    //    }

//    //    private async Task RaiseUserVerificationFailedEvent(NotificationRecipient user)
//    //    {
//    //        _messageService.AddMessage(new UserVerificationFailedMessage { Email = user.Email });
//    //        await _messageService.SaveMessagesToDb();
//    //        //_eventLogger.LogInformation(new UserEventLoggerModel { Uid = user.Uid.ToString(), UserName = user.Email }, LogClassEnum.Email, LogEventEnum.EmailConfirmationRequested, LogResultEnum.Failure);
//    //    }
//    //}
//}
