using Domain.Core;

using Stamp.Core.Models.Pictures;
using Stamp.Domain.DataAccess.Projections;

using static Stamp.Core.ServiceProvider.CountriesGetConverter;
using static Stamp.Core.ServiceProvider.StampInfosGetConverter;
using static Stamp.Core.ServiceProvider.StampTypesGetConverter;

namespace Stamp.Core.ServiceProvider
{
    public class PicturesGetConverter : IConverter<PicturesResponseModel, PictureProjection[]>
    {
        private readonly IConverter<PictureResponseModel, PictureProjection> _pictureConverter;

        public PicturesGetConverter()
        {
            _pictureConverter = new WatermarkGetConverter();
        }

        public PicturesResponseModel From(PictureProjection[] src)
        {
            return new PicturesResponseModel(_pictureConverter.From(src), src.Count());
        }

        public class WatermarkGetConverter : IConverter<PictureResponseModel, PictureProjection>
        {
            public PictureResponseModel From(PictureProjection src)
            {
                return new PictureResponseModel
                {
                    Id = src.Id,
                    ImageFile = src.ImageFile != null ? Convert.ToBase64String(src.ImageFile) : null,
                    Name = src.Name,
                    Type = src.Type,
                    Size = src.Size,
                    ImageWidth = src.ImageWidth,
                    ImageHeight = src.ImageHeight,
                    Country = new CountryGetConverter().From(src.Country),
                    StampType = new StampTypeGetConverter().From(src.StampType),
                    StampCatalogs = new StampCatalogsGetConverter().FromArray(src.StampCatalogs),
                    StampInfo = new StampInfoGetConverter().From(src.StampInfo)
                };
            }
        }
    }
}
