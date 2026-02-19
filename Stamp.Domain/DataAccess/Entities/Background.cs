namespace Stamp.Domain.DataAccess.Entities
{
    public class Background
    {
        public Guid Id { get; set; }
        public required byte[] Image { get; set; }
        public bool IsActive { get; set; }
        public int Number { get; set; }
        public string Name { get; set; }
        public int ImageMaxSize { get; set; }
    }
}
