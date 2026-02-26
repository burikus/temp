namespace IdentityService.Domain.Dtos
{
    public record MyDetailsDto
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
