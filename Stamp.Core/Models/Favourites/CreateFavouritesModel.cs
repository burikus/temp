namespace Stamp.Core.Models.Favourites
{
    public record CreateFavouritesModel(Guid UserId, Guid[] StampIds);
}
