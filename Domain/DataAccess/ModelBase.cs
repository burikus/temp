namespace Domain.DataAccess
{
    public abstract record ModelBase
    {
        public Guid Id { get; init; }
    }
}
