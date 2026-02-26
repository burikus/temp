using Domain.Core;
using Domain.CQRS;
using Domain.DataAccess.Specifications;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Queries;

namespace IdentityService.Domain.QueryHandlers
{
    public class FeedbackMessagesQueryHandler : QueryHandlerBase<FeedbackMessagesQuery, IEnumerable<FeedbackMessageDto>>
    {
        private readonly IReadonlyRepository<FeedbackMessage> _readonlyRepository;

        public FeedbackMessagesQueryHandler(
            IMapper mapper,
            IReadonlyRepository<FeedbackMessage> readonlyRepository)
            : base(mapper)
        {
            _readonlyRepository = readonlyRepository ?? throw new ArgumentNullException(nameof(readonlyRepository));
        }

        protected override async Task<Result<IEnumerable<FeedbackMessageDto>>> ProcessRequestAsync(FeedbackMessagesQuery query, CancellationToken cancellationToken)
        {
            var messages = await _readonlyRepository
                    .GetByFilter(CreateFilterSpecification(query), ignoreQueryFilters: query.IsAdmin)
                    .ConfigureAwait(false);

            return Result<IEnumerable<FeedbackMessageDto>>.Ok(Mapper.Map<IEnumerable<FeedbackMessageDto>>(messages));
        }

        private Specification<FeedbackMessage> CreateFilterSpecification(FeedbackMessagesQuery query)
        {
            Specification<FeedbackMessage> spec = query.IsAdmin
                ? new FilterSpecification.DefaultSpecification<FeedbackMessage>()
                : new FeedbackMessagesSpecs.BySentDateTimeIsNull();

            if (query.UserUid.HasValue && !query.IsAdmin)
            {
                spec |= new FeedbackMessagesSpecs.ByUserUid(query.UserUid.Value);
            }

            return spec;
        }
    }
}
