using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.SubThemes;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class SubThemeService : ISubThemeService
    {
        private readonly ISubThemeQuery _subThemeQuery;
        private readonly ISubThemeRepository _subThemeRepository;

        public SubThemeService(ISubThemeQuery subThemeQuery, ISubThemeRepository subThemeRepository)
        {
            _subThemeQuery = SystemObjects.RequireNotNull(subThemeQuery, nameof(subThemeQuery));
            _subThemeRepository = SystemObjects.RequireNotNull(subThemeRepository, nameof(subThemeRepository));
        }

        public async Task<Result<SubThemesResponseModel>> AllSubThemesAsync()
        {
            var result = await _subThemeQuery.AllSubThemesAsync();

            return Result<SubThemesResponseModel>.Ok(new SubThemesGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateSubThemesAsync(UpdateSubThemesModel model)
        {
            var subThemes = await _subThemeRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!subThemes.HasAny())
                return Result<string>.BadRequest("Подтемы для обновления не найдены.");

            foreach (var subTheme in subThemes)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == subTheme.Id);
                subTheme.Code = current?.Code ?? subTheme.Code;
                subTheme.Description = current?.Description ?? subTheme.Description;
            }

            await _subThemeRepository.UpdateRangeAsync(subThemes);

            return Result<string>.Ok("Подтемы обновлены.");
        }

        public async Task<Result<string>> AddSubThemesAsync(CreateSubThemesModel model)
        {
            var subThemes = await _subThemeQuery.SubThemesFilteredAsync(new SubThemeFilter(Codes: model.Data.Select(x => x.Code).ToArray()));
            if (subThemes.HasAny())
                return Result<string>.BadRequest("Подтемы уже существуют.");

            var newSubThemes = model.Data.Select(x =>
                new SubTheme
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    Description = x.Description
                })
                .ToArray();

            await _subThemeRepository.CreateRangeAsync(newSubThemes);

            return Result<string>.Ok("Подтемы добавлены.");
        }

        public async Task<Result<string>> DeleteSubThemesAsync(DeleteSubThemesModel model)
        {
            var subThemes = await _subThemeRepository.GetByIdsAsync(model.Ids);
            if (!subThemes.HasAny())
                return Result<string>.BadRequest("Подтемы не существуют.");

            await _subThemeRepository.DeleteRangeAsync(subThemes);

            return Result<string>.Ok("Подтемы удалены.");
        }
    }
}
