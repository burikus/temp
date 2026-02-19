namespace Domain.DataAccess.Specifications
{
    public abstract class DictionarySpecification<TEntity, TKey, TResult>
    {
        public abstract Func<TEntity, TKey> KeySelector { get; }

        public abstract Func<TEntity, TResult> ResultSelector { get; }
    }
}
