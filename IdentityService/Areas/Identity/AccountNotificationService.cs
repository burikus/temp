using System;
using System.Threading.Tasks;

using Domain.DataAccess.UnitOfWork;
using Domain.Interfaces;
using IdentityService.DataAccess.EntityFramework;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Messaging;
using IdentityService.Messaging;
using IdentityService.Services;
using Infrastructure.Emails;

using FluentEmail.Core;

using Microsoft.EntityFrameworkCore;

namespace IdentityService.Areas.Identity
{
    public class AccountNotificationService : IAccountNotificationService
    {
        private readonly IUnitOfWork _transactionManager;
        private readonly UserManager _userManager;
        private readonly IEmailService _emailService;
        private readonly IDateTimeProvider _dateTimeProvider;
        private readonly IAccountNotificationBuilder _accountNotificationBuilder;
        private readonly OutboxMessageService<IdentityContext> _messageService;

        public AccountNotificationService(
            IUnitOfWork transactionManager,
            UserManager userManager,
            IEmailService emailService,
            IDateTimeProvider dateTimeProvider,
            IAccountNotificationBuilder accountNotificationBuilder,
            IdentityContext context)
        {
            _transactionManager = transactionManager ?? throw new ArgumentNullException(nameof(transactionManager));
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
            _emailService = emailService ?? throw new ArgumentNullException(nameof(emailService));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
            _accountNotificationBuilder = accountNotificationBuilder ?? throw new ArgumentNullException(nameof(accountNotificationBuilder));
            _messageService = new OutboxMessageService<IdentityContext>(context);
        }

        public async Task SendConfirmAccountEmailMessageAsync(NotificationRecipient user)
        {
            using var transaction = await _transactionManager.BeginTransaction();

            try
            {
                await HandleSendConfirmAccountEmailMessageCommandAsync(user).ConfigureAwait(false);
                await _transactionManager.CommitTransaction();
            }
            catch (DbUpdateException ex)
            {
                ex.Entries.ForEach(x => x.State = EntityState.Detached);
                throw;
            }
        }

        public async Task AddRolesToUser(string userId, string email, string[] roles)
        {
            using var transaction = await _transactionManager.BeginTransaction();

            try
            {
                var target = await _userManager.FindByIdAsync(userId).ConfigureAwait(false);
                await _userManager.AddToRolesAsync(target, roles).ConfigureAwait(false);

                await _transactionManager.CommitTransaction();
            }
            catch (DbUpdateException ex)
            {
                ex.Entries.ForEach(x => x.State = EntityState.Detached);
                throw;
            }
        }

        public async Task PasswordRestoreMessageAsync(string email)
        {
            using var transaction = await _transactionManager.BeginTransaction();

            try
            {
                await HandlePasswordRestoreMessageCommandAsync(email).ConfigureAwait(false);
                await _transactionManager.CommitTransaction();
            }
            catch (DbUpdateException ex)
            {
                ex.Entries.ForEach(x => x.State = EntityState.Detached);
                throw;
            }
        }

        public async Task SendUserMessageInternal(Guid userUid, string userMessage)
        {
            var message = await _accountNotificationBuilder.BuildFeedbackInternal(userUid, userMessage);

            await _emailService.SendEmailAsync(message).ConfigureAwait(false);
        }

        private async Task HandleSendConfirmAccountEmailMessageCommandAsync(NotificationRecipient user)
        {
            var target = await _userManager.FindByEmailAsync(user.Email).ConfigureAwait(false);
            var message = await _accountNotificationBuilder.BuildConfirmAccountEmailMessageAsync(user);
            await _emailService.SendEmailAsync(message).ConfigureAwait(false);

            await _userManager.UpdateAsync(target.OnConfirmationEmailSent(_dateTimeProvider.UtcNow)).ConfigureAwait(false);
            await OnSendConfirmAccountEmailMessageAsync(user);
        }

        private async Task HandlePasswordRestoreMessageCommandAsync(string email)
        {
            var user = await _userManager.FindByEmailAsync(email).ConfigureAwait(false);
            var message = await _accountNotificationBuilder.BuildPasswordRestoreMessageAsync(email);
            await _emailService.SendEmailAsync(message).ConfigureAwait(false);

            //await OnSendRestorePasswordMessageAsync(new NotificationRecipient(Guid.Parse(user.Id), user.Email));
        }

        private async Task OnSendConfirmAccountEmailMessageAsync(NotificationRecipient user)
        {
            _messageService.AddMessage(new UserVerificationRequestMessage { Entity = new UserIdentity { Uid = user.Uid, Email = user.Email } });
            await _messageService.SaveMessagesToDb();
        }

        private async Task OnSendRestorePasswordMessageAsync(NotificationRecipient user)
        {
            _messageService.AddMessage(new RestorePasswordRequestMessage { Entity = new UserIdentity { Uid = user.Uid, Email = user.Email } });
            await _messageService.SaveMessagesToDb();
        }
    }
}
