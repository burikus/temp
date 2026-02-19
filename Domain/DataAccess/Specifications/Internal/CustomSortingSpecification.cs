using System.Linq.Expressions;

namespace Domain.DataAccess.Specifications.Internal
{
    public class CustomSortingSpecification<TEntity, TProperty> : SortingSpecification<TEntity, TProperty>
        where TEntity : class
    {
        public CustomSortingSpecification(Expression<Func<TEntity, TProperty>> keySelector)
        {
            KeySelector = keySelector;
        }

        public override Expression<Func<TEntity, TProperty>> KeySelector { get; }
    }
}