using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.StampSeries;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class StampSeriesService : IStampSeriesService
    {
        private readonly IStampSeriesQuery _stampSeriesQuery;
        private readonly IStampSeriesRepository _stampSeriesRepository;

        public StampSeriesService(IStampSeriesQuery watermarkQuery, IStampSeriesRepository watermarkRepository)
        {
            _stampSeriesQuery = SystemObjects.RequireNotNull(watermarkQuery, nameof(watermarkQuery));
            _stampSeriesRepository = SystemObjects.RequireNotNull(watermarkRepository, nameof(watermarkRepository));
        }

        public async Task<Result<StampSeriesesResponseModel>> AllStampSeriesesAsync()
        {
            var result = await _stampSeriesQuery.AllStampSeriesAsync();

            return Result<StampSeriesesResponseModel>.Ok(new StampSeriesesGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateStampSeriesesAsync(UpdateStampSeriesesModel model)
        {
            var stampSerieses = await _stampSeriesRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!stampSerieses.HasAny())
                return Result<string>.BadRequest("Серии для обновления не найдены.");

            foreach (var stampSeries in stampSerieses)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == stampSeries.Id);
                stampSeries.Text = current?.Text ?? stampSeries.Text;
                stampSeries.Date = current?.Date ?? stampSeries.Date.Date;
            }

            await _stampSeriesRepository.UpdateRangeAsync(stampSerieses);

            return Result<string>.Ok("Серии обновлены.");
        }

        public async Task<Result<string>> AddStampSeriesesAsync(CreateStampSeriesesModel model)
        {
            if (!model.Data.HasAny())
                return Result<string>.BadRequest("Серии уже существуют.");

            foreach (var item in model.Data)
            {
                if ((await _stampSeriesQuery.StampSeriesFilteredAsync(new StampSeriesFilter(DateFrom: item.Date.Date, DateTo: item.Date.Date))).HasAny())
                    return Result<string>.BadRequest("Серии уже существуют.");
            }
            
            var newStampSerieses = model.Data.Select(x =>
               new StampSeries
               {
                   Id = Guid.NewGuid(),
                   Text = x.Text,
                   Date = x.Date.Date,
               })
               .ToArray();

            await _stampSeriesRepository.CreateRangeAsync(newStampSerieses);

            return Result<string>.Ok("Серии добавлены.");
        }

        public async Task<Result<string>> DeleteStampSeriesesAsync(DeleteStampSeriesesModel model)
        {
            var stampSerieses = await _stampSeriesRepository.GetByIdsAsync(model.Ids);
            if (!stampSerieses.HasAny())
                return Result<string>.BadRequest("Серии не существуют.");

            await _stampSeriesRepository.DeleteRangeAsync(stampSerieses);

            return Result<string>.Ok("Серии удалены.");
        }
    }
}
