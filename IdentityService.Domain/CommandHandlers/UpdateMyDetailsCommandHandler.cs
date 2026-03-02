using Domain.Core;
using Domain.CQRS;
using Domain.DataAccess.UnitOfWork;
using Domain.Interfaces;
using Domain.Interfaces.Repositories;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.DataAccess.Specifications;

namespace IdentityService.Domain.CommandHandlers
{
    public class UpdateMyDetailsCommandHandler : CommandHandlerBase<UpdateMyDetailsCommand, BaseCommandResult>
    {
        private readonly IWriteonlyRepository<MyDetail> _writeOnlyRepository;

        public UpdateMyDetailsCommandHandler(
            IUnitOfWork unitOfWork, IMapper mapper,
            IWriteonlyRepository<MyDetail> writeOnlyRepository)
            : base(unitOfWork, mapper)
        {
            _writeOnlyRepository = writeOnlyRepository ?? throw new ArgumentNullException(nameof(writeOnlyRepository));
        }

        protected override async Task<BaseCommandResult> ProcessCommandAsync(UpdateMyDetailsCommand command, CancellationToken cancellationToken)
        {
            var detail = await _writeOnlyRepository.GetSingle(new MyDetailsSpecs.ByUid(command.Id));

            if (detail == null)
            {
                await _writeOnlyRepository.Add(Mapper.Map<MyDetail>(command));
            }
            else
            {
                detail.Text = command.Text;
                detail.Font = command.Font;
                detail.FontSize = command.FontSize;
                detail.FontColor = command.FontColor;
                detail.Align = command.Align;
                detail.FontStyleWeight = command.FontStyleWeight;

                await _writeOnlyRepository.Update(detail);
            }

            return new BaseCommandResult { IsSucceed = true };
        }

        protected override Result<BaseCommandResult> CreateResponse(BaseCommandResult response)
        {
            return Result<BaseCommandResult>.Created(response);
        }
    }
}
