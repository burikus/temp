using Domain.Core;
using Domain.CQRS;
using Domain.DataAccess;
using Domain.DataAccess.UnitOfWork;
using Domain.Dtos;

using FluentValidation;

using MediatR;

namespace ServiceConfiguration.Base
{
    public abstract class UploadDataCommandHandlerBase<TUploadDto, TResultDto> :
        IRequestHandler<DataUploadCommand<TUploadDto>, Result<IEnumerable<InvalidUploadData>>>
        where TUploadDto : UploadDtoBase
        where TResultDto : class
    {
        private const int BadRequestStatusCode = (int)ResultStatus.BadRequest;

        private readonly IEnumerable<IValidator<DataUploadCommand<TUploadDto>>> _validators;
        private readonly IUnitOfWork _unitOfWork;
        protected readonly IMediator Mediator;

        protected UploadDataCommandHandlerBase(IEnumerable<IValidator<DataUploadCommand<TUploadDto>>> validators, IUnitOfWork unitOfWork, IMediator mediator)
        {
            _validators = validators ?? throw new ArgumentNullException(nameof(validators));
            _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
            Mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        public async Task<Result<IEnumerable<InvalidUploadData>>> Handle(DataUploadCommand<TUploadDto> request, CancellationToken cancellationToken)
        {
            using (await _unitOfWork.BeginTransaction().ConfigureAwait(false))
            {
                try
                {
                    var failureMessages = _validators.Select(validator => validator.Validate(request))
                        .SelectMany(validationResult => validationResult.Errors)
                        .Where(validationFailure => validationFailure != null)
                        .Select(failure => failure.ErrorMessage)
                        .ToList();

                    if (failureMessages.Any())
                    {
                        return Result<IEnumerable<InvalidUploadData>>.BadRequest(string.Join("\n", failureMessages));
                    }

                    var result = new List<InvalidUploadData>();

                    foreach (var data in request.UploadData)
                    {
                        var uploadResult = await UploadItem(data, cancellationToken).ConfigureAwait(false);
                        var invalidData = HandleCommandResult(uploadResult, data);

                        if (invalidData != null)
                        {
                            result.Add(invalidData);
                        }
                    }

                    await _unitOfWork.CommitTransaction().ConfigureAwait(false);

                    await PublishNotifications(request, result).ConfigureAwait(false);
                    return Result<IEnumerable<InvalidUploadData>>.Ok(result);
                }
                catch
                {
                    await _unitOfWork.Rollback().ConfigureAwait(false);
                    throw;
                }
            }

        }

        protected abstract Task<Result<TResultDto>> Create(TUploadDto data, CancellationToken cancellationToken);
        protected abstract Task<Result<TResultDto>> Update(TUploadDto data, CancellationToken cancellationToken);
        protected abstract Task<Result<TResultDto>> Remove(TUploadDto data, CancellationToken cancellationToken);

        private async Task<Result<TResultDto>> UploadItem(TUploadDto data, CancellationToken cancellationToken)
        {
            if (data.IsCreateDto())
            {
                return await Create(data, cancellationToken).ConfigureAwait(false);
            }

            if (data.IsUpdateDto())
            {
                return await Update(data, cancellationToken).ConfigureAwait(false);
            }

            if (data.IsRemoveDto())
            {
                return await Remove(data, cancellationToken).ConfigureAwait(false);
            }

            throw new ArgumentException();
        }

        public InvalidUploadData? HandleCommandResult<T>(Result<T> result, object uploadDto)
            where T : class
        {
            return result.StatusCode == BadRequestStatusCode
                ? new InvalidUploadData
                {
                    Data = uploadDto.ToString(),
                    ErrorDescription = result.ErrorDescription,
                }
                : null;
        }

        protected virtual Task PublishNotifications(DataUploadCommand<TUploadDto> request, IEnumerable<InvalidUploadData> response)
        {
            return Task.CompletedTask;
        }
    }
}
