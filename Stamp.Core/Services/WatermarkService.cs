using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Watermarks;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class WatermarkService : IWatermarkService
    {
        private readonly IWatermarkQuery _watermarkQuery;
        private readonly IWatermarkRepository _watermarkRepository;

        public WatermarkService(IWatermarkQuery watermarkQuery, IWatermarkRepository watermarkRepository)
        {
            _watermarkQuery = SystemObjects.RequireNotNull(watermarkQuery, nameof(watermarkQuery));
            _watermarkRepository = SystemObjects.RequireNotNull(watermarkRepository, nameof(watermarkRepository));
        }

        public async Task<Result<WatermarksResponseModel>> AllWatermarksAsync()
        {
            var result = await _watermarkQuery.AllWatermarksAsync();

            return Result<WatermarksResponseModel>.Ok(new WatermarksGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateWatermarksAsync(UpdateWatermarksModel model)
        {
            var watermarks = await _watermarkRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!watermarks.HasAny())
                return Result<string>.BadRequest("Водяные знаки для обновления не найдены.");

            foreach (var watermark in watermarks)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == watermark.Id);
                watermark.Code = current?.Code ?? watermark.Code;
                watermark.Description = current?.Description ?? watermark.Description;
                watermark.ImageFile = !string.IsNullOrEmpty(current?.ImageFile) ? Convert.FromBase64String(current.ImageFile) : watermark.ImageFile;
            }

            await _watermarkRepository.UpdateRangeAsync(watermarks);

            return Result<string>.Ok("Водяные знаки обновлены.");
        }

        public async Task<Result<string>> AddWatermarksAsync(CreateWatermarksModel model)
        {
            var watermarks = await _watermarkQuery.WatermarksFilteredAsync(new WatermarkFilter(Codes: model.Data.Select(x => x.Code).ToArray()));
            if (watermarks.HasAny())
                return Result<string>.BadRequest("Водяные знаки уже существуют.");

            var newWatermarks = model.Data.Select(x =>
                new Watermark
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    ImageFile = !string.IsNullOrEmpty(x.ImageFile) ? Convert.FromBase64String(x.ImageFile) : null,
                    Description = x.Description
                })
                .ToArray();

            await _watermarkRepository.CreateRangeAsync(newWatermarks);

            return Result<string>.Ok("Водяные знаки добавлены.");
        }

        public async Task<Result<string>> DeleteWatermarksAsync(DeleteWatermarksModel model)
        {
            var watermarks = await _watermarkRepository.GetByIdsAsync(model.Ids);
            if (!watermarks.HasAny())
                return Result<string>.BadRequest("Водяные знаки не существуют.");

            await _watermarkRepository.DeleteRangeAsync(watermarks);

            return Result<string>.Ok("Водяные знаки удалены.");
        }
    }
}
