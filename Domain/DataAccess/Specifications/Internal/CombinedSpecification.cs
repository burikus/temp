using System.Linq.Expressions;

namespace Domain.DataAccess.Specifications.Internal
{
    internal class CombinedSpecification<T> : Specification<T> where T : class
    {
        public CombinedSpecification(Expression<Func<T, bool>> predicate)
        {
            Predicate = predicate;
        }
    }
}