using Domain.CQRS;
using Domain.CQRS.Interfaces;

namespace IdentityService.Domain.Commands
{
    public record UpdateMyDetailsCommand : ICommand<BaseCommandResult>
    {
        public Guid Uid { get; init; }
        public string Text { get; init; }
        public string Font { get; init; }
        public string FontSize { get; init; }
        public string FontColor { get; init; }
        public int FontStyleWeight { get; init; }
        public string Align { get; init; }
    }
}
