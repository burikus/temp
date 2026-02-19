using Domain.Core;

using Stamp.Core.Models.Favourites;
using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.ServiceProvider
{
    public class FavouritesGetConverter : IConverter<FavouritesResponseModel, FavouriteProjection[]>
    {
        private readonly IConverter<FavouriteResponseModel, FavouriteProjection> _catalogConverter;

        public FavouritesGetConverter()
        {
            _catalogConverter = new FavouriteGetConverter();
        }

        public FavouritesResponseModel From(FavouriteProjection[] src)
        {
            return new FavouritesResponseModel(_catalogConverter.From(src), src.Count()); ;
        }

        public class FavouriteGetConverter : IConverter<FavouriteResponseModel, FavouriteProjection>
        {
            public FavouriteResponseModel From(FavouriteProjection src)
            {
                return new FavouriteResponseModel(src.UserId, src.StampId);
            }
        }
    }
}
