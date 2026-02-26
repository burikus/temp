using Domain.Extensions;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Queries;
using IdentityService.Interfaces;

using Infrastructure.Emails;

using MediatR;

namespace IdentityService.Services
{
    public class FeedbackMessageService : IFeedbackMessageService
    {
        private readonly IMapper _mapper;
        private readonly IEmailBuilder _emailBuilder;
        private readonly IReadonlyRepository<User> _readonlyRepository;
        private readonly IDateTimeProvider _dateTimeProvider;
        private readonly IMediator _mediator;
        private readonly IEmailService _emailService;

        public FeedbackMessageService(
            IMapper mapper,
            IEmailBuilder emailBuilder,
            IReadonlyRepository<User> readonlyRepository,
            IDateTimeProvider dateTimeProvider,
            IMediator mediator,
            IEmailService emailService
        )
        {
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _emailBuilder = emailBuilder ?? throw new ArgumentNullException(nameof(emailBuilder));
            _readonlyRepository = readonlyRepository ?? throw new ArgumentNullException(nameof(readonlyRepository));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            _emailService = emailService ?? throw new ArgumentNullException(nameof(emailService));
        }

        public async Task SendFeedbackMessagesAsync()
        {
            var messageGroups = (await _mediator.Send(new FeedbackMessagesQuery()).ConfigureAwait(false)).Value!
                .GroupBy(x => x.UserUid).ToArray();

            if (messageGroups.HasAny())
            {
                var userDetailsGroups = _mapper.Map<User[]>(await _readonlyRepository
                    .GetByFilter(new UserSpecs.ByUids(messageGroups.Select(x => x.Key))));

                foreach (var group in messageGroups)
                {
                    foreach (var item in group)
                    {
                        var email = _emailBuilder.BuildAskMeEmailMessage(userDetailsGroups.First(x => Guid.Parse(x.Id) == item.UserUid), item);

                        await _emailService.SendEmailAsync(email).ConfigureAwait(false);

                        var entity = _mapper.Map<UpdateFeedbackMessageCommand>(item);
                        entity.SentDateTime = _dateTimeProvider.UtcNow;

                        await _mediator.Send(entity).ConfigureAwait(false);
                    }
                }
            }
        }
    }
}
