namespace Blog.Core.Models.Backgrounds
{
    public record BackgroundsUpdateModel(BackgroundUpdateModel[] Data);

    public record BackgroundUpdateModel(Guid Id, string? Image = null, bool? IsActive = null, int? Number = null, string? Name = null, int? ImageMaxSize = null);
}
