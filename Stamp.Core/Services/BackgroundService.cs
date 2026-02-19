using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Backgrounds;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class BackgroundService : IBackgroundService
    {
        private readonly IBackgroundQuery _backgroundQuery;
        private readonly IBackgroundRepository _backgroundRepository;
        private readonly IProcessImageService _processImageService;

        public BackgroundService(IBackgroundQuery backgroundQuery, IBackgroundRepository backgroundRepository, IProcessImageService processImageService)
        {
            _backgroundQuery = SystemObjects.RequireNotNull(backgroundQuery, nameof(backgroundQuery));
            _backgroundRepository = SystemObjects.RequireNotNull(backgroundRepository, nameof(backgroundRepository));
            _processImageService = SystemObjects.RequireNotNull(processImageService, nameof(processImageService));
        }

        public async Task<Result<BackgroundsResponseModel>> AllBackgroundsAsync()
        {
            var result = await _backgroundQuery.AllBackgroundsAsync();

            return Result<BackgroundsResponseModel>.Ok(new BackgroundsGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateBackgroundsAsync(UpdateBackgroundsModel model)
        {
            var backgrounds = await _backgroundRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!backgrounds.HasAny())
                return Result<string>.BadRequest("Фоны для обновления не найдены.");

            foreach (var background in backgrounds)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == background.Id);
                background.IsActive = current?.IsActive ?? background.IsActive;
                background.Number = current?.Number ?? background.Number;
                background.Image = !string.IsNullOrEmpty(current?.Image) ? Convert.FromBase64String(current.Image) : background.Image;
                background.Name = current?.Name ?? background.Name;
                background.ImageMaxSize = current?.ImageMaxSize ?? background.ImageMaxSize;
            }

            await _backgroundRepository.UpdateRangeAsync(backgrounds);

            return Result<string>.Ok("Фоны обновлены.");
        }

        public async Task<Result<string>> AddBackgroundsAsync(CreateBackgroundsModel model)
        {
            if (model.Data.HasAny())
                return Result<string>.BadRequest("Фоны уже существуют.");

            var newBackgrounds = model.Data.Select(x =>
                {
                    var image = _processImageService.ResizeBackground(x.Image, x.ContentType, x.ImageMaxSize);
                    return new Background
                    {
                        Id = Guid.NewGuid(),
                        IsActive = x.IsActive,
                        Number = x.Number,
                        Image = Convert.FromBase64String(image),
                        Name = x.Name,
                        ImageMaxSize = x.ImageMaxSize
                    };
                })
                .ToArray();

            await _backgroundRepository.CreateRangeAsync(newBackgrounds);

            return Result<string>.Ok("Фоны добавлены.");
        }

        public async Task<Result<string>> DeleteBackgroundsAsync(DeleteBackgroundsModel model)
        {
            var backgrounds = await _backgroundRepository.GetByIdsAsync(model.Ids);
            if (!backgrounds.HasAny())
                return Result<string>.BadRequest("Фоны не существуют.");

            await _backgroundRepository.DeleteRangeAsync(backgrounds);

            return Result<string>.Ok("Фоны удалены.");
        }
    }
}
