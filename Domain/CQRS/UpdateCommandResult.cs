namespace Domain.CQRS
{
    public record UpdateCommandResult
    {
        public Guid Uid { get; init; }
        public bool IsSucceed { get; init; }
    }
}
