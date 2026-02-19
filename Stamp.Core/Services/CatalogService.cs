using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Catalogs;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class CatalogService : ICatalogService
    {
        private readonly ICatalogQuery _catalogQuery;
        private readonly ICatalogRepository _catalogRepository;

        public CatalogService(ICatalogQuery catalogQuery, ICatalogRepository catalogRepository)
        {
            _catalogQuery = SystemObjects.RequireNotNull(catalogQuery, nameof(catalogQuery));
            _catalogRepository = SystemObjects.RequireNotNull(catalogRepository, nameof(catalogRepository));
        }

        public async Task<Result<CatalogsResponseModel>> AllCatalogsAsync()
        {
            var result = await _catalogQuery.AllCatalogsAsync();

            return Result<CatalogsResponseModel>.Ok(new CatalogsGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateCatalogsAsync(UpdateCatalogsModel model)
        {
            var catalogs = await _catalogRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!catalogs.HasAny())
                return Result<string>.BadRequest("Каталоги для обновления не найдены.");

            foreach (var catalog in catalogs)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == catalog.Id);
                catalog.Code = current?.Code ?? catalog.Code;
                catalog.Description = current?.Description ?? catalog.Description;
            }

            await _catalogRepository.UpdateRangeAsync(catalogs);

            return Result<string>.Ok("Каталоги обновлены.");
        }

        public async Task<Result<string>> AddCatalogsAsync(CreateCatalogsModel model)
        {
            var catalogs = await _catalogQuery.CatalogsFilteredAsync(new CatalogFilter(Codes: model.Data.Select(x => x.Code).ToArray()));
            if (catalogs.HasAny())
                return Result<string>.BadRequest("Каталоги уже существуют.");

            var newCatalogs = model.Data.Select(x =>
                new Catalog
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    Description = x.Description
                })
                .ToArray();

            await _catalogRepository.CreateRangeAsync(newCatalogs);

            return Result<string>.Ok("Каталоги добавлены.");
        }

        public async Task<Result<string>> DeleteCatalogsAsync(DeleteCatalogsModel model)
        {
            var catalogs = await _catalogRepository.GetByIdsAsync(model.Ids);
            if (!catalogs.HasAny())
                return Result<string>.BadRequest("Каталоги не существуют.");

            await _catalogRepository.DeleteRangeAsync(catalogs);

            return Result<string>.Ok("Каталоги удалены.");
        }
    }
}
