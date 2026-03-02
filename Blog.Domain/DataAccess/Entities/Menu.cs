namespace Blog.Domain.DataAccess.Entities
{
    public class Menu
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; } = true;
        public int Position { get; set; }

        public Guid? SwipperId { get; set; }
        public virtual Swipper Swipper { get; set; }

        public Guid TextFormattingId { get; set; }
        public virtual TextFormatting TextFormatting { get; set; }

        public virtual ICollection<MicroBlog> Blogs { get; set; }
    }
}
