using System;
using System.Threading;
using System.Threading.Tasks;

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
    public class MyDetailsQueryHandler : QueryHandlerBase<MyDetailsQuery, MyDetailsDto>
    {
        private readonly IReadonlyRepository<MyDetail> _repository;

        public MyDetailsQueryHandler(
            IMapper mapper,
            IReadonlyRepository<MyDetail> repository
            ) : base(mapper)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        protected override async Task<Result<MyDetailsDto>> ProcessRequestAsync(MyDetailsQuery request, CancellationToken cancellationToken)
        {
            var detail = await _repository.GetSingle(new MyDetailsSpecs.BySource(isAboutMe: true)).ConfigureAwait(false);

            return Result<MyDetailsDto>.Ok(Mapper.Map<MyDetailsDto>(detail ?? new MyDetail
            {
                Id = Guid.Empty,
                Align = string.Empty,
                Font = "Arbor",
                FontColor = string.Empty,
                FontSize = "12",
                FontStyleWeight = 0,
                IsAboutme = true,
                IsNewsletter = false
            }));
        }
    }
}
