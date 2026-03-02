using Blog.Core.Models.Infos;
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
    public class SwipperService : ISwipperService
    {
        private readonly ISwipperQuery _swipperQuery;
        private readonly ISwipperRepository _swipperRepository;

        public SwipperService(ISwipperQuery swipperQuery, ISwipperRepository swipperRepository)
        {
            _swipperQuery = SystemObjects.RequireNotNull(swipperQuery, nameof(swipperQuery));
            _swipperRepository = SystemObjects.RequireNotNull(swipperRepository, nameof(swipperRepository));
        }

        public async Task<Result<SwippersResponseModel>> AllSwippersAsync(bool isAdmin)
        {
            var result = await _swipperQuery.AllSwippersAsync(isAdmin);

            return Result<SwippersResponseModel>.Ok(new SwippersGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateSwippersAsync(SwippersUpdateModel model)
        {
            var swippers = await _swipperRepository.GetByIdsAsync(model.Items.Select(x => x.Id).ToArray());
            if (!swippers.HasAny())
                return Result<string>.BadRequest("Свипперы для обновления не найдены.");

            foreach (var swipper in swippers)
            {
                var current = model.Items.FirstOrDefault(x => x.Id == swipper.Id);
                if (current == null)
                    continue;

                swipper.Image = Convert.FromBase64String(current.Image);
                swipper.IsActive = current.IsActive;
                swipper.MenuId = current.MenuId;
            }

            await _swipperRepository.UpdateRangeAsync(swippers);

            return Result<string>.Ok("Свипперы обновлены.");
        }

        public async Task<Result<string>> AddSwippersAsync(SwippersCreateModel model)
        {
            if (!model.Itmes.HasAny())
                return Result<string>.BadRequest("Свипперы уже существуют.");

            var swippers = new List<Swipper>();
            foreach (var swipper in model.Itmes)
            {
                swippers.Add(new Swipper
                {
                    Id = Guid.NewGuid(),
                    Image = Convert.FromBase64String(swipper.Image),
                    MenuId = swipper.MenuId,
                    IsActive = swipper.IsActive,
                });
            }

            await _swipperRepository.CreateRangeAsync(swippers);

            return Result<string>.Ok("Свипперы добавлены.");
        }

        public async Task<Result<string>> DeleteSwippersAsync(SwippersDeleteModel model)
        {
            var swippers = await _swipperRepository.GetByIdsAsync(model.Ids);
            if (!swippers.HasAny())
                return Result<string>.BadRequest("Свипперы не существуют.");

            await _swipperRepository.DeleteRangeAsync(swippers);

            return Result<string>.Ok("Свипперы удалены.");
        }
    }
}
