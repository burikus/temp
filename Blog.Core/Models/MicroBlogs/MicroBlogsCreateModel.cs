using Blog.Core.Models.Infos;

namespace Blog.Core.Models.MicroBlogs
{
    public record MicroBlogsCreateModel(MicroBlogCreateModel[] Items);
    public record MicroBlogCreateModel
    {
        public Guid? MenuId { get; init; }
        public int? MenuPosition { get; init; }
        public bool IsActive { get; init; }
        public InfoUpdateModel[] Infos { get; init; }
    }
}
