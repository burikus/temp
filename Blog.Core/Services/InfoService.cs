using Blog.Core.Models.Infos;
using Blog.Core.ServiceProvider;
using Blog.Core.Services.Contracts;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Queries;
using Blog.Domain.DataAccess.Queries.Contracts;
using Blog.Domain.DataAccess.Repositories;

using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

namespace Blog.Core.Services
{
    public class InfoService : IInfoService
    {
        private readonly IInfoQuery _infoQuery;
        private readonly IInfoRepository _infoRepository;

        public InfoService(IInfoQuery infoQuery, IInfoRepository infoRepository)
        {
            _infoQuery = SystemObjects.RequireNotNull(infoQuery, nameof(infoQuery));
            _infoRepository = SystemObjects.RequireNotNull(infoRepository, nameof(infoRepository));
        }

        public async Task<Result<InfosResponseModel>> InfoByFilterAsync(bool isAdmin, InfosGetModel args)
        {
            var result = await _infoQuery.InfoByFilterAsync(new InfoFilter(isAdmin, args.Ids));

            return Result<InfosResponseModel>.Ok(new InfosGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateInfoAsync(InfosUpdateModel model)
        {
            var infos = await _infoRepository.GetByIdsAsync(model.Items.Select(x => x.Id).ToArray());
            if (!infos.HasAny())
                return Result<string>.BadRequest("Тексты для обновления не найдены.");

            foreach (var info in infos)
            {
                var current = model.Items.FirstOrDefault(x => x.Id == info.Id);
                if (current == null)
                    continue;

                info.Text = current.Text;
                info.IsActive = current.IsActive;
                info.BlogId = current.BlogId;
                info.TextFormattingId = current.TextFormattingId;
            }

            await _infoRepository.UpdateInfosAsync(infos);

            return Result<string>.Ok("Тексты обновлены.");
        }

        public async Task<Result<string>> AddInfosAsync(InfosCreateModel model)
        {
            if (!model.Itmes.HasAny())
                return Result<string>.BadRequest("Тексты для обновления не найдены.");

            var newInfos = new List<Info>();
            foreach (var info in model.Itmes)
            {
                newInfos.Add(new Info
                {
                    Id = Guid.NewGuid(),
                    Text = info.Text,
                    IsActive = info.IsActive,
                    BlogId = info.BlogId,
                    TextFormattingId = info.TextFormattingId
                });
            }

            await _infoRepository.AddInfosAsync(newInfos);

            return Result<string>.Ok("Тексты добавлены.");
        }

        public async Task<Result<string>> DeleteInfoAsync(InfosDeleteModel model)
        {
            var infos = await _infoRepository.GetByIdsAsync(model.Ids);
            if (!infos.HasAny())
                return Result<string>.BadRequest("Тексты не существуют.");

            await _infoRepository.RemoveInfosAsync(infos);

            return Result<string>.Ok("Тексты удалены.");
        }
    }
}
