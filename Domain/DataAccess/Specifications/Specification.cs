using System.Linq.Expressions;

using Domain.DataAccess.Specifications.Internal;

namespace Domain.DataAccess.Specifications
{
    public abstract class Specification<T> where T : class
    {
        // Predicate for filtering entities. Example condition: person => person.Age > 18
        public Expression<Func<T, bool>> Predicate { get; protected set; }

        // Logical AND overload, when it is necessary to filter by two or more predicates
        // Example condition: person => person.Age > 18 && person.Age < 45
        public static Specification<T> operator &(Specification<T> left, Specification<T> right)
        {
            return Combine(left, right, Expression.AndAlso);
        }

        // Logical OR overload. when it is necessary to filter out at least one predicate
        // Example condition: person => person.Age == 18 || person.Age == 16
        public static Specification<T> operator |(Specification<T> left, Specification<T> right)
        {
            return Combine(left, right, Expression.OrElse);
        }

        // Logical denial.
        public static Specification<T> operator !(Specification<T> original)
        {
            return new CombinedSpecification<T>(
                Expression.Lambda<Func<T, bool>>(Expression.Negate(original.Predicate.Body),
                    original.Predicate.Parameters));
        }

        // Combines two expressions into one, replacing their parameters with one(Visitor class)
        private static Specification<T> Combine(Specification<T> left, Specification<T> right,
            Func<Expression, Expression, BinaryExpression> combiner)
        {
            var leftExpression = left.Predicate;
            var rightExpression = right.Predicate;
            var arg = Expression.Parameter(typeof(T));

            var combined = combiner.Invoke(
                new ReplaceParameterVisitor { { leftExpression.Parameters.Single(), arg } }.Visit(leftExpression.Body),
                new ReplaceParameterVisitor { { rightExpression.Parameters.Single(), arg } }.Visit(rightExpression.Body)
            );

            return new CombinedSpecification<T>(Expression.Lambda<Func<T, bool>>(combined, arg));
        }

        private Func<T, bool> _function;

        private Func<T, bool> Function => _function ??= Predicate.Compile();

        public bool IsSatisfiedBy(T entity)
        {
            return Function.Invoke(entity);
        }
    }
}