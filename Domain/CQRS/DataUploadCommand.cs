using Domain.Core;
using Domain.DataAccess;

using MediatR;

namespace Domain.CQRS
{
    public class DataUploadCommand<TDto> : IRequest<Result<IEnumerable<InvalidUploadData>>>
    {
        public TDto[] UploadData { get; set; }
    }
}
