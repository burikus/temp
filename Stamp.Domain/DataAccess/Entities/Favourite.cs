namespace Stamp.Domain.DataAccess.Entities
{
    public class Favourite
    {
        public Guid UserId { get; set; }
        public Guid StampId { get; set; }

        public virtual Picture Picture { get; set; }
    }
}
