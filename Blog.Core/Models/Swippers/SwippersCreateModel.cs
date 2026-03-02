namespace Blog.Core.Models.Infos
{
    public record SwippersCreateModel(SwipperCreateModel[] Itmes);
    public record SwipperCreateModel(string Image, bool IsActive, Guid? MenuId);
}
