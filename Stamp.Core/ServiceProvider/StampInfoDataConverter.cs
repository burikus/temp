using Domain.Core;

using Stamp.Core.Models.StampInfos;
using Stamp.Domain.DataAccess.Projections;

using static Stamp.Core.ServiceProvider.PapersGetConverter;
using static Stamp.Core.ServiceProvider.PerforationsGetConverter;
using static Stamp.Core.ServiceProvider.PrintTypesGetConverter;
using static Stamp.Core.ServiceProvider.RastersGetConverter;
using static Stamp.Core.ServiceProvider.StampSeriesesGetConverter;
using static Stamp.Core.ServiceProvider.ThemesGetConverter;
using static Stamp.Core.ServiceProvider.WatermarksGetConverter;

namespace Stamp.Core.ServiceProvider
{
    public class StampInfosGetConverter : IConverter<StampInfosResponseModel, StampInfoProjection[]>
    {
        private readonly IConverter<StampInfoResponseModel, StampInfoProjection> _stampInfoConverter;

        public StampInfosGetConverter()
        {
            _stampInfoConverter = new StampInfoGetConverter();
        }

        public StampInfosResponseModel From(StampInfoProjection[] src)
        {
            return new StampInfosResponseModel(_stampInfoConverter.From(src), src.Count());
        }

        public class StampInfoGetConverter : IConverter<StampInfoResponseModel, StampInfoProjection>
        {
            public StampInfoResponseModel From(StampInfoProjection src)
            {
                return new StampInfoResponseModel
                {
                    Id = src.Id,
                    Description = src.Description,
                    Background = src.Background,
                    Color = src.Color,
                    Designer = src.Designer,
                    IsAdditional = src.IsAdditional,
                    IsDefect = src.IsDefect,
                    IsForm2 = src.IsForm2,
                    IsKindOf = src.IsKindOf,
                    IssueDate = src.IssueDate,
                    IsUV = src.IsUV,
                    LinkToCatalogEmitter = src.LinkToCatalogEmitter,
                    PrintedCopies = src.PrintedCopies,
                    Size = src.Size,
                    Position = src.Position,
                    SubMenuId = src.SubMenuId,
                    SubMenuPosition = src.SubMenuPosition,
                    Paper = src.Paper != null ? new PaperGetConverter().From(src.Paper) : null,
                    Perforation = src.Perforation != null ? new PerforationGetConverter().From(src.Perforation) : null,
                    PrintType = src.PrintType != null ? new PrintTypeGetConverter().From(src.PrintType) : null,
                    Raster = src.Raster != null ? new RasterGetConverter().From(src.Raster) : null,
                    StampSeries = src.StampSeries != null ? new StampSeriesGetConverter().From(src.StampSeries) : null,
                    Theme = src.Theme != null ? new ThemeGetConverter().From(src.Theme) : null,
                    Watermark = src.Watermark != null ? new WatermarkGetConverter().From(src.Watermark) : null
                };
            }
        }
    }
}
