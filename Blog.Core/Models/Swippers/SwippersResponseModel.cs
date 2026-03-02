namespace Blog.Core.Models.Infos
{
    public record SwippersResponseModel(SwipperResponseModel[] Data, int TotalCount);

    public record SwipperResponseModel(Guid Id, string Image, bool IsActive, Guid? MenuId);
}
