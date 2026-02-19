using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.StampTypes;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class StampTypeService : IStampTypeService
    {
        private readonly IStampTypeQuery _stampTypeQuery;
        private readonly IStampTypeRepository _stampTypeRepository;

        public StampTypeService(IStampTypeQuery watermarkQuery, IStampTypeRepository watermarkRepository)
        {
            _stampTypeQuery = SystemObjects.RequireNotNull(watermarkQuery, nameof(watermarkQuery));
            _stampTypeRepository = SystemObjects.RequireNotNull(watermarkRepository, nameof(watermarkRepository));
        }

        public async Task<Result<StampTypesResponseModel>> AllStampTypesAsync()
        {
            var result = await _stampTypeQuery.AllStampTypesAsync();

            return Result<StampTypesResponseModel>.Ok(new StampTypesGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateStampTypesAsync(UpdateStampTypesModel model)
        {
            var stampTypes = await _stampTypeRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!stampTypes.HasAny())
                return Result<string>.BadRequest("Виды марки для обновления не найдены.");

            foreach (var stampType in stampTypes)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == stampType.Id);
                stampType.StampCode = current?.Code ?? stampType.StampCode;
                stampType.Description = current?.Description ?? stampType.Description;
                stampType.Horizontal = current?.Horizontal ?? stampType.Horizontal;
                stampType.Vertical = current?.Vertical ?? stampType.Vertical;
            }

            await _stampTypeRepository.UpdateRangeAsync(stampTypes);

            return Result<string>.Ok("Виды марки обновлены.");
        }

        public async Task<Result<string>> AddStampTypesAsync(CreateStampTypesModel model)
        {
            if (!model.Data.HasAny())
                return Result<string>.BadRequest("Виды марки уже существуют.");

            foreach (var item in model.Data)
            {
                if ((await _stampTypeQuery.StampTypesFilteredAsync(new StampTypeFilter(Codes: [item.StampCode], Horizontal: item.Horizontal, Vertical: item.Vertical))).HasAny())
                    return Result<string>.BadRequest("Виды марки уже существуют.");
            }

            var newStampTypes = model.Data.Select(x =>
               new StampType
               {
                   Id = Guid.NewGuid(),
                   StampCode = x.StampCode,
                   Description = x.Description,
                   Horizontal = x.Horizontal,
                   Vertical = x.Vertical
               })
               .ToArray();

            await _stampTypeRepository.CreateRangeAsync(newStampTypes);

            return Result<string>.Ok("Виды марки добавлены.");
        }

        public async Task<Result<string>> DeleteStampTypesAsync(DeleteStampTypesModel model)
        {
            var stampTypes = await _stampTypeRepository.GetByIdsAsync(model.Ids);
            if (!stampTypes.HasAny())
                return Result<string>.BadRequest("Виды марки не существуют.");

            await _stampTypeRepository.DeleteRangeAsync(stampTypes);

            return Result<string>.Ok("Виды марки удалены.");
        }
    }
}
