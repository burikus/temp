using Domain.Core;
using Domain.CQRS;
using Domain.Extensions;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Queries;

using MediatR;

namespace IdentityService.Domain.QueryHandlers
{
    public class UserFeedbackMessagesQueryHandler : QueryHandlerBase<UserFeedbackMessagesQuery, FeedbackMessageDto[]>
    {
        private readonly IReadonlyRepository<FeedbackMessage> _readonlyRepository;
        private readonly IReadonlyRepository<User> _userRepository;
        private readonly IMediator _mediator;

        public UserFeedbackMessagesQueryHandler(
            IMapper mapper,
            IMediator mediator,
            IReadonlyRepository<User> userRepository,
            IReadonlyRepository<FeedbackMessage> readonlyRepository)
            : base(mapper)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            _readonlyRepository = readonlyRepository ?? throw new ArgumentNullException(nameof(readonlyRepository));
            _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        }

        protected override async Task<Result<FeedbackMessageDto[]>> ProcessRequestAsync(UserFeedbackMessagesQuery query, CancellationToken cancellationToken)
        {
            FeedbackMessageDto[] messages = Array.Empty<FeedbackMessageDto>();

            var messageGroups = (await _mediator.Send(new FeedbackMessagesQuery { IsAdmin = query.IsAdmin, UserId = query.UserId }).ConfigureAwait(false)).Value!
                                    .OrderByDescending(x => x.AskedDateTime)
                                    .GroupBy(x => x.UserUid).ToArray();

            if (messageGroups.HasAny())
            {
                var userDetailsGroups = Mapper.Map<UserDetailsDto[]>(await _userRepository
                                            .GetByFilter(new UserSpecs.ByUids(messageGroups.Select(x => x.Key))));

                messages = messageGroups.SelectMany(group => group)
                            .Join(userDetailsGroups, messages => messages.UserUid, user => user.Id, (message, user) =>
                            {
                                return new FeedbackMessageDto
                                {
                                    Id = message.Id,
                                    UserUid = user.Id,
                                    UserFullName = user.FullName,
                                    UserEmail = user.Email,
                                    UserPhone = user.Phone,
                                    Message = message.Message,
                                    Avatar = message.Avatar,
                                    AskedDateTime = message.AskedDateTime,
                                    SentDateTime = message.SentDateTime
                                };
                            })
                            ?.OrderByDescending(x => x.AskedDateTime)
                            ?.ToArray();
            }

            return Result<FeedbackMessageDto[]>.Ok(messages ?? Array.Empty<FeedbackMessageDto>());
        }
    }
}
