namespace Stamp.Core.Models.Backgrounds
{
    public record CreateBackgroundsModel(CreateBackgroundModel[] Data);

    public record CreateBackgroundModel(string Image, bool IsActive, int Number, string ContentType, string Name, int ImageMaxSize);
}
