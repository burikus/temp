using Domain.Core;
using Domain.CQRS.Interfaces;
using Domain.Interfaces;

namespace Domain.CQRS
{
    public abstract class QueryHandlerBase<TQuery, TResponse> : IQueryHandler<TQuery, TResponse>
        where TQuery : IQuery<TResponse>
        where TResponse : class
    {
        protected readonly IMapper Mapper;

        protected QueryHandlerBase()
        {
        }

        protected QueryHandlerBase(IMapper mapper)
        {
            Mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public virtual async Task<Result<TResponse>> Handle(TQuery query, CancellationToken cancellationToken)
        {
            var result = await ProcessRequestAsync(query, cancellationToken).ConfigureAwait(false);

            await PublishNotification(query, result.Value!, cancellationToken).ConfigureAwait(false);

            return result;
        }

        protected abstract Task<Result<TResponse>> ProcessRequestAsync(TQuery request, CancellationToken cancellationToken);

        protected virtual Task PublishNotification(TQuery request, TResponse result, CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
