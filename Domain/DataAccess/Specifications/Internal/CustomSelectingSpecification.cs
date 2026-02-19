using System.Linq.Expressions;

namespace Domain.DataAccess.Specifications.Internal
{
    public class CustomSelectingSpecification<TEntity, TProperty> : SelectingSpecification<TEntity, TProperty>
        where TEntity : class
    {
        public CustomSelectingSpecification(Expression<Func<TEntity, TProperty>> keySelector)
        {
            SelectorExpression = keySelector;
        }

        public override Expression<Func<TEntity, TProperty>> SelectorExpression { get; }
    }
}
