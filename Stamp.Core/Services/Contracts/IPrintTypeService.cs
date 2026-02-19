using Domain.Core;

using Stamp.Core.Models.PrintTypes;

namespace Stamp.Core.Services.Contracts
{
    public interface IPrintTypeService
    {
        Task<Result<PrintTypesResponseModel>> AllPrintTypesAsync();
        Task<Result<string>> UpdatePrintTypesAsync(UpdatePrintTypesModel model);
        Task<Result<string>> AddPrintTypesAsync(CreatePrintTypesModel model);
        Task<Result<string>> DeletePrintTypesAsync(DeletePrintTypesModel model);
    }
}
