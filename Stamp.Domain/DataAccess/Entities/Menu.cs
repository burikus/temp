namespace Stamp.Domain.DataAccess.Entities
{
    public class Menu
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public int Position { get; set; }
        public virtual ICollection<SubMenu>? SubMenues { get; set; }
    }
}
