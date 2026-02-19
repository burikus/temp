namespace Stamp.Core.Models.Favourites
{
    public record FavouritesResponseModel(FavouriteResponseModel[] Data, int TotalCount);

    public record FavouriteResponseModel(Guid UserId, Guid StampId);
}
