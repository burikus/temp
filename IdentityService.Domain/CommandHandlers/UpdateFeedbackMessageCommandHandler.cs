using Domain.Core;
using Domain.CQRS;
using Domain.DataAccess.UnitOfWork;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.CommandResults;
using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.CommandHandlers
{
    public class UpdateFeedbackMessageCommandHandler : CommandHandlerBase<UpdateFeedbackMessageCommand, UpdateFeedbackMessageCommandResult>
    {
        private readonly IWriteonlyRepository<FeedbackMessage> _writeOnlyRepository;

        public UpdateFeedbackMessageCommandHandler(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IWriteonlyRepository<FeedbackMessage> writeOnlyRepository) :
            base(unitOfWork, mapper)
        {
            _writeOnlyRepository = writeOnlyRepository ?? throw new ArgumentNullException(nameof(writeOnlyRepository));
        }

        protected override async Task<UpdateFeedbackMessageCommandResult> ProcessCommandAsync(
            UpdateFeedbackMessageCommand command,
            CancellationToken cancellationToken)
        {
            var entity = await _writeOnlyRepository.Update(Mapper.Map<FeedbackMessage>(command));

            return new UpdateFeedbackMessageCommandResult { EntityUid = entity.Id };
        }

        protected override Result<UpdateFeedbackMessageCommandResult> CreateResponse(UpdateFeedbackMessageCommandResult response)
        {
            return Result<UpdateFeedbackMessageCommandResult>.Created(response);
        }
    }
}
