using System.Linq.Expressions;

namespace Domain.DataAccess.Specifications
{
    public abstract class GroupingSpecification<TEntity, TKey, TResult>
    {
        // The expression should return an object consisting of properties by which entities should be grouped
        public abstract Expression<Func<TEntity, TKey>> KeySelector { get; }

        // An expression that from the fields by which the grouping was done and all the entities that were grouped creates a result object
        public abstract Expression<Func<TKey, IEnumerable<TEntity>, TResult>> ResultSelector { get; }
    }
}