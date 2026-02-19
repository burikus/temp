using System.Linq.Expressions;

namespace Domain.DataAccess.Specifications
{
    public abstract class SelectingSpecification<TEntity, TResult>
    {
        public abstract Expression<Func<TEntity, TResult>> SelectorExpression { get; }
    }
}
