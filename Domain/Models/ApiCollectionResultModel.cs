namespace Domain.Models
{
    public record ApiCollectionResultModel<T> where T : class
    {
        public T[] Items { get; init; }
    }
}
