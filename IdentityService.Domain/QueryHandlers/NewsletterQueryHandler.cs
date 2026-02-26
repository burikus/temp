using Domain.Core;
using Domain.CQRS;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;
using IdentityService.Domain.Dtos;
using IdentityService.Domain.Queries;

namespace IdentityService.Domain.QueryHandlers
{
    public class NewsletterQueryHandler : QueryHandlerBase<NewsletterQuery, MyDetailsDto>
    {
        private readonly IReadonlyRepository<MyDetail> _repository;

        public NewsletterQueryHandler(
            IMapper mapper,
            IReadonlyRepository<MyDetail> repository
            ) : base(mapper)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        protected override async Task<Result<MyDetailsDto>> ProcessRequestAsync(NewsletterQuery request, CancellationToken cancellationToken)
        {
            var detail = await _repository.GetSingle(new MyDetailsSpecs.BySource(isNewsletter: true)).ConfigureAwait(false);

            return Result<MyDetailsDto>.Ok(Mapper.Map<MyDetailsDto>(detail ?? new MyDetail()));
        }
    }
}
