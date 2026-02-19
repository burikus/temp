using Domain.DataAccess.Specifications.Internal;
using Domain.Dtos;
using Domain.Interfaces;

namespace Domain.DataAccess.Specifications.Factories
{
    public class SpecificationsFactory : ISpecificationsFactory
    {
        private readonly IInterpreter _interpreter;
        private const string Parameter = "item";

        public SpecificationsFactory(IInterpreter interpreter)
        {
            _interpreter = interpreter ?? throw new ArgumentNullException(nameof(interpreter));
        }

        public SortingSpecification<TEntity, object> CreateSortingSpecs<TEntity>(SortingDto sorter)
            where TEntity : EntityBase
        {
            return new CustomSortingSpecification<TEntity, object>(
                        _interpreter.ParseAsExpression<Func<TEntity, object>>($"{Parameter}.{sorter.Key}", Parameter))
                    .SortBy(sorter.SortType);
        }

        public Specification<TEntity> CreateFilterSpecification<TEntity>(string predicateString)
            where TEntity : EntityBase
        {
            var predicate = _interpreter.ParseAsExpression<Func<TEntity, bool>>(predicateString, Parameter);
            return new CombinedSpecification<TEntity>(predicate);
        }
    }
}