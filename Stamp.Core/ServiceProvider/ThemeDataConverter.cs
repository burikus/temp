using Domain.Core;

using Stamp.Core.Models.Themes;
using Stamp.Domain.DataAccess.Projections;

using static Stamp.Core.ServiceProvider.SubThemesGetConverter;

namespace Stamp.Core.ServiceProvider
{
    public class ThemesGetConverter : IConverter<ThemesResponseModel, ThemeProjection[]>
    {
        private readonly IConverter<ThemeResponseModel, ThemeProjection> _themeConverter;

        public ThemesGetConverter()
        {
            _themeConverter = new ThemeGetConverter();
        }

        public ThemesResponseModel From(ThemeProjection[] src)
        {
            return new ThemesResponseModel(_themeConverter.From(src), src.Count());
        }

        public class ThemeGetConverter : IConverter<ThemeResponseModel, ThemeProjection>
        {
            public ThemeResponseModel From(ThemeProjection src)
            {
                return new ThemeResponseModel(src.Id, src.Code, src.Description, src.SubTheme != null ? new SubThemeGetConverter().From(src.SubTheme) : null);
            }
        }
    }
}
