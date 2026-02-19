using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.PrintTypes;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class PrintTypeService : IPrintTypeService
    {
        private readonly IPrintTypeQuery _printTypeQuery;
        private readonly IPrintTypeRepository _printTypeRepository;

        public PrintTypeService(IPrintTypeQuery perforationQuery, IPrintTypeRepository perforationRepository)
        {
            _printTypeQuery = SystemObjects.RequireNotNull(perforationQuery, nameof(perforationQuery));
            _printTypeRepository = SystemObjects.RequireNotNull(perforationRepository, nameof(perforationRepository));
        }

        public async Task<Result<PrintTypesResponseModel>> AllPrintTypesAsync()
        {
            var result = await _printTypeQuery.AllPrintTypesAsync();

            return Result<PrintTypesResponseModel>.Ok(new PrintTypesGetConverter().From(result));
        }

        public async Task<Result<string>> UpdatePrintTypesAsync(UpdatePrintTypesModel model)
        {
            var printTypes = await _printTypeRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!printTypes.HasAny())
                return Result<string>.BadRequest("Формы выпуска для обновления не найдены.");

            foreach (var printType in printTypes)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == printType.Id);
                printType.Code = current?.Code ?? printType.Code;
                printType.Description = current?.Description ?? printType.Description;
                printType.ImageFile = !string.IsNullOrEmpty(current?.ImageFile) ? Convert.FromBase64String(current.ImageFile) : printType.ImageFile;
            }

            await _printTypeRepository.UpdateRangeAsync(printTypes);

            return Result<string>.Ok("Формы выпуска обновлены.");
        }

        public async Task<Result<string>> AddPrintTypesAsync(CreatePrintTypesModel model)
        {
            var printTypes = await _printTypeQuery.PrintTypesFilteredAsync(new PrintTypeFilter(Codes: model.Data.Select(x => x.Code).ToArray()));
            if (printTypes.HasAny())
                return Result<string>.BadRequest("Формы выпуска уже существуют.");

            var newPrintTypes = model.Data.Select(x =>
                new PrintType
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    Description = x.Description,
                    ImageFile = !string.IsNullOrEmpty(x.ImageFile) ? Convert.FromBase64String(x.ImageFile) : null
                })
                .ToArray();

            await _printTypeRepository.CreateRangeAsync(newPrintTypes);

            return Result<string>.Ok("Формы выпуска добавлены.");
        }

        public async Task<Result<string>> DeletePrintTypesAsync(DeletePrintTypesModel model)
        {
            var printTypes = await _printTypeRepository.GetByIdsAsync(model.Ids);
            if (!printTypes.HasAny())
                return Result<string>.BadRequest("Формы выпуска не существуют.");

            await _printTypeRepository.DeleteRangeAsync(printTypes);

            return Result<string>.Ok("Формы выпуска удалены.");
        }
    }
}
