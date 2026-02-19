using Domain.Core;

using MediatR;

namespace Domain.CQRS.Interfaces
{
    public interface ICommand<TResponse> : IRequest<Result<TResponse>>
        where TResponse : class
    {
    }
}
