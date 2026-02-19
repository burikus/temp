namespace Stamp.Domain.DataAccess.Entities
{
    public class SubMenu
    {
        public Guid Id { get; set; }
        public Guid MenuId { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public int Position { get; set; }

        public virtual Menu Menu { get; set; }
    }
}
