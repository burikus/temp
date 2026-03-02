using Blog.Core.Models.Backgrounds;
using Blog.Core.ServiceProvider;
using Blog.Core.Services.Contracts;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Queries.Contracts;
using Blog.Domain.DataAccess.Repositories;

using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

namespace Blog.Core.Services
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

        public async Task<Result<BackgroundsResponseModel>> AllBackgroundsAsync(bool isAdmin)
        {
            var result = await _backgroundQuery.AllBackgroundsAsync(isAdmin);

            return Result<BackgroundsResponseModel>.Ok(new BackgroundsGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateBackgroundsAsync(BackgroundsUpdateModel model)
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

        public async Task<Result<string>> AddBackgroundsAsync(BackgroundsCreateModel model)
        {
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

        public async Task<Result<string>> DeleteBackgroundsAsync(BackgroundsDeleteModel model)
        {
            var backgrounds = await _backgroundRepository.GetByIdsAsync(model.Ids);
            if (!backgrounds.HasAny())
                return Result<string>.BadRequest("Фоны не существуют.");

            await _backgroundRepository.DeleteRangeAsync(backgrounds);

            return Result<string>.Ok("Фоны удалены.");
        }
    }
}
