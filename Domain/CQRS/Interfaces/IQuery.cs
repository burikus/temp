using Domain.Core;

using MediatR;

namespace Domain.CQRS.Interfaces
{
    public interface IQuery<TResponse> : IRequest<Result<TResponse>>
         where TResponse : class
    {
    }
}
