using System.Linq.Expressions;

namespace Domain.Interfaces
{
    public interface IInterpreter
    {
        Expression<TDelegate> ParseAsExpression<TDelegate>(
            string expressionText, params string[] parametersNames);
    }
}
