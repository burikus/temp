namespace Domain.CQRS
{
    public record BaseCommandResult
    {
        public Guid? Uid { get; init; }
        public bool IsSucceed { get; init; }
    }
}
