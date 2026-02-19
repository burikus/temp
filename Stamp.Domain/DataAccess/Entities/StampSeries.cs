namespace Stamp.Domain.DataAccess.Entities
{
    public class StampSeries
    {
        public Guid Id { get; set; }

        public required string Text { get; set; }
        public DateTime Date { get; set; }

        public virtual ICollection<StampInfo> Stamps { get; set; }
    }
}
