using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.StampCatalogs;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class StampCatalogService : IStampCatalogService
    {
        private readonly IStampCatalogQuery _stampCatalogQuery;
        private readonly IStampCatalogRepository _stampCatalogRepository;

        public StampCatalogService(IStampCatalogQuery stampCatalogQuery, IStampCatalogRepository stampCatalogRepository)
        {
            _stampCatalogQuery = SystemObjects.RequireNotNull(stampCatalogQuery, nameof(stampCatalogQuery));
            _stampCatalogRepository = SystemObjects.RequireNotNull(stampCatalogRepository, nameof(stampCatalogRepository));
        }

        public async Task<StampCatalogsResponseModel> AllStampCatalogsAsync()
        {
            var result = await _stampCatalogQuery.AllStampCatalogsAsync();

            return new StampCatalogsGetConverter().From(result);
        }

        public async Task<bool> UpdateStampCatalogsAsync(UpdateStampCatalogsModel model)
        {
            var stampCatalogs = await _stampCatalogRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!stampCatalogs.HasAny())
                return Result.BadRequest;

            foreach (var stampCatalog in stampCatalogs)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == stampCatalog.Id);
                stampCatalog.CatalogNumber = current?.CatalogNumber ?? stampCatalog.CatalogNumber;
                stampCatalog.CatalogId = current != null ? current.CatalogId : stampCatalog.CatalogId;
            }

            await _stampCatalogRepository.UpdateRangeAsync(stampCatalogs);

            return Result.Ok;
        }

        public async Task<bool> AddStampCatalogsAsync(CreateStampCatalogsModel model)
        {
            if (!model.Data.HasAny())
                return Result.BadRequest;

            foreach (var item in model.Data)
            {
                if ((await _stampCatalogQuery.StampCatalogsFilteredAsync(new StampCatalogFilter(CatalogNumbers: [item.CatalogNumber], CatalogIds: [item.CatalogId]))).HasAny())
                    return Result.BadRequest;
            }

            var newstampCatalogs = model.Data.Select(x =>
                new StampCatalog
                {
                    Id = Guid.NewGuid(),
                    CatalogNumber = x.CatalogNumber,
                    CatalogId = x.CatalogId,
                })
                .ToArray();

            await _stampCatalogRepository.CreateRangeAsync(newstampCatalogs);

            return Result.Ok;
        }

        public async Task<bool> DeleteStampCatalogsAsync(DeleteStampCatalogsModel model)
        {
            var stampCatalogs = await _stampCatalogRepository.GetByIdsAsync(model.Ids);
            if (!stampCatalogs.HasAny())
                return Result.BadRequest;

            await _stampCatalogRepository.DeleteRangeAsync(stampCatalogs);

            return Result.Ok;
        }
    }
}
