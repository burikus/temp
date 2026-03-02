namespace Blog.Domain.DataAccess.Entities
{
    public class Background
    {
        public Guid Id { get; set; }
        public byte[] Image { get; set; }
        public bool IsActive { get; set; } = true;
        public int Number { get; set; }
        public string Name { get; set; }
        public int ImageMaxSize { get; set; }
    }
}
