using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Perforations;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class PerforationService : IPerforationService
    {
        private readonly IPerforationQuery _perforationQuery;
        private readonly IPerforationRepository _perforationRepository;

        public PerforationService(IPerforationQuery perforationQuery, IPerforationRepository perforationRepository)
        {
            _perforationQuery = SystemObjects.RequireNotNull(perforationQuery, nameof(perforationQuery));
            _perforationRepository = SystemObjects.RequireNotNull(perforationRepository, nameof(perforationRepository));
        }

        public async Task<Result<PerforationsResponseModel>> AllPerforationsAsync()
        {
            var result = await _perforationQuery.AllPerforationsAsync();

            return Result<PerforationsResponseModel>.Ok(new PerforationsGetConverter().From(result));
        }

        public async Task<Result<string>> UpdatePerforationsAsync(UpdatePerforationsModel model)
        {
            var perforations = await _perforationRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!perforations.HasAny())
                return Result<string>.BadRequest("Перфорации для обновления не найдены.");

            foreach (var perforation in perforations)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == perforation.Id);
                perforation.Code = current?.Code ?? perforation.Code;
                perforation.Description = current?.Description ?? perforation.Description;
                perforation.ImageFile = !string.IsNullOrEmpty(current?.ImageFile) ? Convert.FromBase64String(current.ImageFile) : perforation.ImageFile;
            }

            await _perforationRepository.UpdateRangeAsync(perforations);

            return Result<string>.Ok("Перфорации обновлены.");
        }

        public async Task<Result<string>> AddPerforationsAsync(CreatePerforationsModel model)
        {
            var perforations = await _perforationQuery.PerforationsFilteredAsync(new PerforationFilter(Codes: model.Data.Select(x => x.Code).ToArray()));
            if (perforations.HasAny())
                return Result<string>.BadRequest("Перфорации уже существуют.");

            var newPerforations = model.Data.Select(x =>
                new Perforation
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    Description = x.Description,
                    ImageFile = !string.IsNullOrEmpty(x.ImageFile) ? Convert.FromBase64String(x.ImageFile) : null
                })
                .ToArray();

            await _perforationRepository.CreateRangeAsync(newPerforations);

            return Result<string>.Ok("Перфорации добавлены.");
        }

        public async Task<Result<string>> DeletePerforationsAsync(DeletePerforationsModel model)
        {
            var perforations = await _perforationRepository.GetByIdsAsync(model.Ids);
            if (!perforations.HasAny())
                return Result<string>.BadRequest("Перфорации не существуют.");

            await _perforationRepository.DeleteRangeAsync(perforations);

            return Result<string>.Ok("Перфорации удалены.");
        }
    }
}
