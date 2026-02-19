using Domain.Dtos.Interfaces;

namespace Domain.Dtos
{
    public abstract record BaseRecordDto : IDto
    {
        public Guid Uid { get; init; }
    }
}
