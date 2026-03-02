namespace Blog.Domain.DataAccess.Entities
{
    public class Swipper
    {
        public Guid Id { get; set; }
        public required byte[] Image { get; set; }
        public bool IsActive { get; set; } = true;

        public Guid? MenuId { get; set; }
        public virtual Menu Menu { get; set; }
    }
}
