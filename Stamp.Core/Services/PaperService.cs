using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Papers;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class PaperService : IPaperService
    {
        private readonly IPaperQuery _paperQuery;
        private readonly IPaperRepository _paperRepository;

        public PaperService(IPaperQuery paperQuery, IPaperRepository paperRepository)
        {
            _paperQuery = SystemObjects.RequireNotNull(paperQuery, nameof(paperQuery));
            _paperRepository = SystemObjects.RequireNotNull(paperRepository, nameof(paperRepository));
        }

        public async Task<Result<PapersResponseModel>> AllPapersAsync()
        {
            var result = await _paperQuery.AllPapersAsync();

            return Result<PapersResponseModel>.Ok(new PapersGetConverter().From(result));
        }

        public async Task<Result<string>> UpdatePapersAsync(UpdatePapersModel model)
        {
            var papers = await _paperRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!papers.HasAny())
                return Result<string>.BadRequest("Бумвги для обновления не найдены.");

            foreach (var paper in papers)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == paper.Id);
                paper.Code = current?.Code ?? paper.Code;
                paper.Description = current?.Description ?? paper.Description;
                paper.ImageFile = !string.IsNullOrEmpty(current?.ImageFile) ? Convert.FromBase64String(current.ImageFile) : paper.ImageFile;
            }

            await _paperRepository.UpdateRangeAsync(papers);

            return Result<string>.Ok("Бумвги обновлены.");
        }

        public async Task<Result<string>> AddPapersAsync(CreatePapersModel model)
        {
            var papers = await _paperQuery.PapersFilteredAsync(new PaperFilter(Codes: model.Data.Select(x => x.Code).ToArray()));
            if (papers.HasAny())
                return Result<string>.BadRequest("Бумвги уже существуют.");

            var newPapers = model.Data.Select(x =>
                new Paper
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    Description = x.Description,
                    ImageFile = !string.IsNullOrEmpty(x.ImageFile) ? Convert.FromBase64String(x.ImageFile) : null
                })
                .ToArray();

            await _paperRepository.CreateRangeAsync(newPapers);

            return Result<string>.Ok("Бумвги добавлены.");
        }

        public async Task<Result<string>> DeletePapersAsync(DeletePapersModel model)
        {
            var papers = await _paperRepository.GetByIdsAsync(model.Ids);
            if (!papers.HasAny())
                return Result<string>.BadRequest("Бумвги не существуют.");

            await _paperRepository.DeleteRangeAsync(papers);

            return Result<string>.Ok("Бумвги удалены.");
        }
    }
}
