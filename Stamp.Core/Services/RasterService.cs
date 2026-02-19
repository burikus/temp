using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Rasters;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class RasterService : IRasterService
    {
        private readonly IRasterQuery _rasterQuery;
        private readonly IRasterRepository _rasterRepository;

        public RasterService(IRasterQuery rasterQuery, IRasterRepository rasterRepository)
        {
            _rasterQuery = SystemObjects.RequireNotNull(rasterQuery, nameof(rasterQuery));
            _rasterRepository = SystemObjects.RequireNotNull(rasterRepository, nameof(rasterRepository));
        }

        public async Task<Result<RastersResponseModel>> AllRastersAsync()
        {
            var result = await _rasterQuery.AllRastersAsync();

            return Result<RastersResponseModel>.Ok(new RastersGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateRastersAsync(UpdateRastersModel model)
        {
            var rasters = await _rasterRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!rasters.HasAny())
                return Result<string>.BadRequest("Растры для обновления не найдены.");

            foreach (var raster in rasters)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == raster.Id);
                raster.Code = current?.Code ?? raster.Code;
                raster.Description = current?.Description ?? raster.Description;
                raster.ImageFile = !string.IsNullOrEmpty(current?.ImageFile) ? Convert.FromBase64String(current.ImageFile) : raster.ImageFile;
            }

            await _rasterRepository.UpdateRangeAsync(rasters);

            return Result<string>.Ok("Растры обновлены.");
        }

        public async Task<Result<string>> AddRastersAsync(CreateRastersModel model)
        {
            var rasters = await _rasterQuery.RastersFilteredAsync(new RasterFilter(Codes: model.Data.Select(x => x.Code).ToArray()));
            if (rasters.HasAny())
                return Result<string>.BadRequest("Растры уже существуют.");

            var newRasters = model.Data.Select(x =>
                new Raster
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    Description = x.Description,
                    ImageFile = !string.IsNullOrEmpty(x.ImageFile) ? Convert.FromBase64String(x.ImageFile) : null
                })
                .ToArray();

            await _rasterRepository.CreateRangeAsync(newRasters);

            return Result<string>.Ok("Растры добавлены.");
        }

        public async Task<Result<string>> DeleteRastersAsync(DeleteRastersModel model)
        {
            var rasters = await _rasterRepository.GetByIdsAsync(model.Ids);
            if (!rasters.HasAny())
                return Result<string>.BadRequest("Растры не существуют.");

            await _rasterRepository.DeleteRangeAsync(rasters);

            return Result<string>.Ok("Растры удалены.");
        }
    }
}
