using Domain.Core;
using Domain.Enums;

using Stamp.Core.Models.TextFormattings;

namespace Stamp.Core.Services.Contracts
{
    public interface ITextFormattingService
    {
        Task<Result<TextFormattingsResponseModel>> AllTextFormattingsAsync();
        Task<Result<TextFormattingResponseModel>> TextFormattingByTypeAsync(TextType textType);
        Task<Result<string>> UpdateTextFormattingsAsync(UpdateTextFormattingsModel model);
    }
}
