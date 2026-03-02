namespace Blog.Core.Models.Backgrounds
{
    public record BackgroundsResponseModel(BackgroundResponseModel[] Data, int TotalCount);

    public record BackgroundResponseModel(Guid Id, string Image, bool IsActive, int Number, string Name, int ImageMaxSize);
}
