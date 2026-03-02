using Blog.Core.Models.Infos;

namespace Blog.Core.Models.MicroBlogs
{
    public record MicroBlogsResponseModel(MicroBlogResponseModel[] Data, int Count);
    public record MicroBlogResponseModel
    {
        public Guid Id { get; init; }
        public Guid? MenuId { get; init; }
        public int? MenuPosition { get; init; }
        public bool IsActive { get; init; }
        public InfoResponseModel[] Infos { get; init; }
    }
}
