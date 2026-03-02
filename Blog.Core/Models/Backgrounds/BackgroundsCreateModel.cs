namespace Blog.Core.Models.Backgrounds
{
    public record BackgroundsCreateModel(BackgroundCreateModel[] Data);

    public record BackgroundCreateModel(string Image, bool IsActive, int Number, string ContentType, string Name, int ImageMaxSize);
}
