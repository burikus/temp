using Blog.Core.Models.TextFormattings;

using Domain.Core;

namespace Blog.Core.Services.Contracts
{
    public interface ITextFormattingService
    {
        Task<Result<TextFormattingsResponseModel>> AllTextFormattingAsync();
        Task<Result<TextFormattingResponseModel>> TextFormattingByFilterAsync(bool isAdmin, TextFormattingGetModel args);
        Task<Result<string>> UpdateTextFormattingAsync(TextFormattingsUpdateModel model);
    }
}
