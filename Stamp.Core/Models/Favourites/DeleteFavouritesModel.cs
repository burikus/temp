namespace Stamp.Core.Models.Favourites
{
    public record DeleteFavouritesModel(Guid UserId, Guid[] StampIds);
}
