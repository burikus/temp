using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models.Themes;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class ThemeService : IThemeService
    {
        private readonly IThemeQuery _themeQuery;
        private readonly IThemeRepository _themeRepository;

        public ThemeService(IThemeQuery themeQuery, IThemeRepository themeRepository)
        {
            _themeQuery = SystemObjects.RequireNotNull(themeQuery, nameof(themeQuery));
            _themeRepository = SystemObjects.RequireNotNull(themeRepository, nameof(themeRepository));
        }

        public async Task<Result<ThemesResponseModel>> AllThemesAsync()
        {
            var result = await _themeQuery.AllThemesAsync();

            return Result<ThemesResponseModel>.Ok(new ThemesGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateThemesAsync(UpdateThemesModel model)
        {
            var themes = await _themeRepository.GetByIdsAsync([.. model.Data.Select(x => x.Id)]);
            if (!themes.HasAny())
                return Result<string>.BadRequest("Темы для обновления не найдены.");

            foreach (var theme in themes)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == theme.Id);
                theme.Code = current?.Code ?? theme.Code;
                theme.Description = current?.Description ?? theme.Description;
                theme.SubThemeId = current?.SubThemeId;
            }

            await _themeRepository.UpdateRangeAsync(themes);

            return Result<string>.Ok("Темы обновлены.");
        }

        public async Task<Result<string>> AddThemesAsync(CreateThemesModel model)
        {
            if (!model.Data.HasAny())
                return Result<string>.BadRequest("Темы уже существуют.");

            foreach (var item in model.Data)
            {
                if ((await _themeQuery.ThemesFilteredAsync(new ThemeFilter(Codes: [item.Code], SubThemeIds: [item.SubThemeId]))).HasAny())
                    return Result<string>.BadRequest("Темы уже существуют.");
            }

            var newThemes = model.Data.Select(x =>
                new Theme
                {
                    Id = Guid.NewGuid(),
                    Code = x.Code,
                    SubThemeId = x.SubThemeId,
                    Description = x.Description
                })
                .ToArray();

            await _themeRepository.CreateRangeAsync(newThemes);

            return Result<string>.Ok("Темы добавлены.");
        }

        public async Task<Result<string>> DeleteThemesAsync(DeleteThemesModel model)
        {
            var themes = await _themeRepository.GetByIdsAsync(model.Ids);
            if (!themes.HasAny())
                return Result<string>.BadRequest("Темы не существуют.");

            await _themeRepository.DeleteRangeAsync(themes);

            return Result<string>.Ok("Темы удалены.");
        }
    }
}
