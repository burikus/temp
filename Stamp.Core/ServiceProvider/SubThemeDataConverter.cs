using Domain.Core;

using Stamp.Core.Models.SubThemes;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class SubThemesGetConverter : IConverter<SubThemesResponseModel, SubThemeProjection[]>
    {
        private readonly IConverter<SubThemeResponseModel, SubThemeProjection> _subThemeConverter;

        public SubThemesGetConverter()
        {
            _subThemeConverter = new SubThemeGetConverter();
        }

        public SubThemesResponseModel From(SubThemeProjection[] src)
        {
            return new SubThemesResponseModel(_subThemeConverter.From(src), src.Count());
        }

        public class SubThemeGetConverter : IConverter<SubThemeResponseModel, SubThemeProjection>
        {
            public SubThemeResponseModel From(SubThemeProjection src)
            {
                return new SubThemeResponseModel(src.Id, src.Code, src.Description);
            }
        }
    }
}
