namespace Blog.Domain.DataAccess.Entities
{
    public class MicroBlog
    {
        public Guid Id { get; set; }
        public bool IsActive { get; set; } = true;

        public Guid? MenuId { get; set; }
        public int? MenuPosition { get; set; }

        public virtual Menu? Menu { get; set; }

        public virtual ICollection<Info> Infos { get; set; }
    }
}
