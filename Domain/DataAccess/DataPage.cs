namespace Domain.DataAccess
{
    public class DataPage<TEntity>
    {
        public TEntity[] Items { get; set; } = null!;
        public int TotalCount { get; set; }
    }
}
