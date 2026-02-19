namespace Domain.DataAccess
{
    public abstract class SoftDeletableEntityBase : EntityBase
    {
        public DateTime? DateDeleted { get; set; }
    }
}
