using Domain.Enums;

namespace Blog.Domain.DataAccess.Entities
{
    public class Info
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public bool IsActive { get; set; } = true;

        public Guid? BlogId { get; set; }
        public virtual MicroBlog Blog { get; set; }

        public Guid TextFormattingId { get; set; }
        public virtual TextFormatting TextFormatting { get; set; }
    }
}
