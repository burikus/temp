namespace Blog.Core.Models.Infos
{
    public record SwippersUpdateModel(SwipperUpdateModel[] Items);
    public record SwipperUpdateModel(Guid Id, string Image, bool IsActive, Guid? MenuId);
}
