using Domain.Interfaces;

namespace Domain.Models
{
    public abstract record BaseRecordModel : IModel
    {
        public Guid Uid { get; init; }
    }
}
