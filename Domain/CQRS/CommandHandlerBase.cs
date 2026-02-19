using Domain.Core;
using Domain.CQRS.Interfaces;
using Domain.DataAccess.UnitOfWork;
using Domain.Interfaces;

namespace Domain.CQRS
{
    public abstract class CommandHandlerBase<TRequest, TResponse> : ICommandHandler<TRequest, TResponse>
        where TRequest : ICommand<TResponse>
        where TResponse : class
    {
        private readonly IUnitOfWork _unitOfWork;
        protected readonly IMapper Mapper;

        protected CommandHandlerBase(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
        }

        protected CommandHandlerBase(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
            Mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<Result<TResponse>> Handle(TRequest command, CancellationToken cancellationToken)
        {
            var result = await ProcessCommandAsync(command, cancellationToken).ConfigureAwait(false);

            await _unitOfWork.Commit().ConfigureAwait(false);

            await PublishCommandNotificationAsync(command, result, cancellationToken).ConfigureAwait(false);

            return CreateResponse(result);
        }

        public async Task<TResponse> HandleAsync(TRequest command, CancellationToken cancellationToken)
        {
            var result = await ProcessCommandAsync(command, cancellationToken).ConfigureAwait(false);

            await PublishCommandNotificationAsync(command, result, cancellationToken).ConfigureAwait(false);

            return result;
        }

        protected virtual Task PublishCommandNotificationAsync(TRequest command, TResponse response, CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }

        //protected override async Task PublishCommandNotificationAsync(CreateFeedbackMessageCommand request,
        //    CreateFeedbackMessageCommandResult response, CancellationToken cancellationToken)
        //{
        //    await _messageBroker.Publish(PublishingKey, response.EntityUid);
        //}

        protected abstract Task<TResponse> ProcessCommandAsync(TRequest command, CancellationToken cancellationToken);
        protected abstract Result<TResponse> CreateResponse(TResponse response);
    }
}
