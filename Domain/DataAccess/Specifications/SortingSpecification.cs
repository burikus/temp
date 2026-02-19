using System.Linq.Expressions;

using Domain.Core;

namespace Domain.DataAccess.Specifications
{
    public abstract class SortingSpecification<TEntity, TProperty>
    {
        // An expression that should return the property by which to sort
        public abstract Expression<Func<TEntity, TProperty>> KeySelector { get; }
        public SortType SortType { get; private set; } = SortType.Ascending;

        public SortingSpecification<TEntity, TProperty> SortBy(SortType sortType)
        {
            SortType = sortType;

            return this;
        }
    }
}