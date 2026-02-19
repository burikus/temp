using Domain.Core;

using MediatR;

namespace Domain.CQRS.Interfaces
{
    public interface IQueryHandler<in TQuery, TResponse> : IRequestHandler<TQuery, Result<TResponse>>
        where TQuery : IQuery<TResponse>
        where TResponse : class
    {
    }
}
