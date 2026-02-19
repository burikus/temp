using System.Linq.Expressions;

using Domain.Extensions;

namespace Domain.DataAccess.Specifications
{
    public abstract class JoinStrategy<TEntity> where TEntity : class
    {
        // The expression that should return the navigation property to be joined
        public Expression<Func<TEntity, object>> NavigationProperty { private get; set; }

        private string _joinStrategyString = string.Empty;
        public string JoinStrategyString => string.Concat(NavigationProperty.GetPropertyInfo().Name, _joinStrategyString);

        public JoinStrategy<TEntity> ThenInclude<TEntity1>(JoinStrategy<TEntity1> joinStrategy) where TEntity1 : class
        {
            _joinStrategyString = string.Concat(".", joinStrategy.JoinStrategyString);

            return this;
        }
    }
}
