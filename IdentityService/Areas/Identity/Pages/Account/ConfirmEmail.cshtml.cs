using System;
using System.Text;
using System.Threading.Tasks;

using Domain.DataAccess.UnitOfWork;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Services;

using FluentEmail.Core;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;

namespace IdentityService.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ConfirmEmailModel : PageModel
    {
        private readonly UserManager _userManager;
        private readonly IUnitOfWork _transactionManager;

        public ConfirmEmailModel(
            UserManager userManager,
            IUnitOfWork transactionManager
            )
        {
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
            _transactionManager = transactionManager ?? throw new ArgumentNullException(nameof(transactionManager));
        }

        public string StatusMessage { get; set; }
        public bool HasPassword { get; set; }
        [BindProperty] public string UserId { get; set; }
        [BindProperty] public InputModel Input { get; set; }

        public class InputModel
        {
        }

        public async Task<IActionResult> OnGetAsync(string uid, string code)
        {
            if (code == null)
                return ForbidEmailConfirmation("Для подтверждения регистрации не хватает кода подтверждения.");
            if (uid == null)
                return ForbidEmailConfirmation("Ошибка в ссылке. Обратитесь к администратору. contact@o-iva.ru");

            var user = await FindUserByIdAsync(uid).ConfigureAwait(false);

            if (user == null)
            {
                return ForbidEmailConfirmation("Пользователь не существует.");
            }

            if (user is { Active: true })
                return ForbidEmailConfirmation("Ваш аккаунт уже активирован.", false);

            HasPassword = await _userManager.HasPasswordAsync(user).ConfigureAwait(false);

            if (HasPassword)
            {
                await ConfirmEmailAndUpdateUserStatus(user, code);
            }

            return Page();
        }

        public async Task<IActionResult> OnPostAsync(string code)
        {
            return Page();
        }

        private async Task<IdentityResult> ConfirmEmailAndUpdateUserStatus(User user, string code)
        {
            code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(code));

            var result = await VerifyUserTokenAsync(user, code);

            if (result)
            {
                using var transaction = await _transactionManager.BeginTransaction();

                StatusMessage = "Спасибо за подтверждение регистрации.";
                try
                {
                    user.Active = true;
                    user.EmailConfirmed = true;
                    await _userManager.UpdateAsync(user);

                    await _transactionManager.CommitTransaction();
                }
                catch (DbUpdateException ex)
                {
                    ex.Entries.ForEach(x => x.State = EntityState.Detached);
                    throw;
                }
                //_userEventLogger.LogInformation(new UserEventLoggerModel { Uid = user.Id, UserName = user.Name },
                //    LogClassEnum.Email, LogEventEnum.EmailConfirmationComplete, LogResultEnum.Success);
                return IdentityResult.Success;
            }
            else
            {
                //var issueDescription = result.Errors.Select(it => it.Description).Aggregate((first, second) => $"{first} {second}");
                StatusMessage = "Код подтверждения неправильный. Свяжитесь пожалуйста с администратором. \n\n contact@o-iva.ru" +
                    "или попробуйте Зарегистрироваться заново.";

                //_userEventLogger.LogInformation(new UserEventLoggerModel { Uid = user.Id, UserName = user.Name },
                //    LogClassEnum.Email, LogEventEnum.EmailConfirmationComplete, LogResultEnum.Failure);
            }

            return IdentityResult.Failed();
        }

        private async Task<User?> FindUserByIdAsync(string userId)
        {
            if (string.IsNullOrWhiteSpace(userId))
                return null;

            return await _userManager.FindByIdAsync(userId).ConfigureAwait(false);
        }

        private async Task<bool> VerifyUserTokenAsync(User user, string token)
        {
            var provider = _userManager.Options.Tokens.EmailConfirmationTokenProvider;
            const string purpose = UserManager.ConfirmEmailTokenPurpose;

            return await _userManager.VerifyUserTokenAsync(user, provider, purpose, token).ConfigureAwait(false);
        }

        private ActionResult ForbidEmailConfirmation(string cause, bool renew = true)
        {
            StatusMessage = cause;

            return Page();
        }
    }
}
