namespace Domain.CQRS
{
    public class CreateEntityCommandResult
    {
        public Guid EntityUid { get; set; }
    }

    public record CreateCommandResult
    {
        public Guid? Uid { get; init; }
    }
}
