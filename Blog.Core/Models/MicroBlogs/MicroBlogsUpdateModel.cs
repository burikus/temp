using Blog.Core.Models.Infos;

namespace Blog.Core.Models.MicroBlogs
{
    public record MicroBlogsUpdateModel(MicroBlogUpdateModel[] Items);
    public record MicroBlogUpdateModel
    {
        public Guid Id { get; init; }
        public Guid? MenuId { get; init; }
        public int? MenuPosition { get; init; }
        public bool IsActive { get; init; }

        public InfoUpdateModel[] Infos { get; init; }
    }
}
