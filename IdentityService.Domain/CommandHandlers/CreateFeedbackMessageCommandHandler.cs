using Domain.Core;
using Domain.CQRS;
using Domain.DataAccess.UnitOfWork;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.CommandHandlers
{
    public class CreateFeedbackMessageCommandHandler : CommandHandlerBase<CreateFeedbackMessageCommand, BaseCommandResult>
    {
        // TODO Replace messageBroker stubs  
        //private const string PublishingKey = "EmailHelp";

        private readonly IWriteonlyRepository<FeedbackMessage> _writeOnlyRepository;
        //private readonly IMessageBroker _messageBroker;

        public CreateFeedbackMessageCommandHandler(
            //IMessageBroker messageBroker,
            IUnitOfWork unitOfWork, IMapper mapper,
            IWriteonlyRepository<FeedbackMessage> writeOnlyRepository)
            : base(unitOfWork, mapper)
        {
            //_messageBroker = messageBroker ?? throw new ArgumentNullException(nameof(messageBroker));
            _writeOnlyRepository = writeOnlyRepository ?? throw new ArgumentNullException(nameof(writeOnlyRepository));
        }

        protected override async Task<BaseCommandResult> ProcessCommandAsync(CreateFeedbackMessageCommand request, CancellationToken cancellationToken)
        {
            await _writeOnlyRepository.Add(Mapper.Map<FeedbackMessage>(request));

            return new BaseCommandResult { IsSucceed = true };
        }

        protected override Result<BaseCommandResult> CreateResponse(BaseCommandResult response)
        {
            return Result<BaseCommandResult>.Created(response);
        }

        //protected override async Task PublishCommandNotificationAsync(CreateFeedbackMessageCommand request,
        //    CreateFeedbackMessageCommandResult response, CancellationToken cancellationToken)
        //{
        //    await _messageBroker.Publish(PublishingKey, response.EntityUid);
        //}
    }
}
