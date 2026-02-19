namespace Domain.DataAccess
{
    public abstract record ModelBase
    {
        public Guid Uid { get; init; }
    }
}
