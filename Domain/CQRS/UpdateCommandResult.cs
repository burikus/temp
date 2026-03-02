namespace Domain.CQRS
{
    public record UpdateCommandResult
    {
        public Guid Id { get; init; }
        public bool IsSucceed { get; init; }
    }
}
