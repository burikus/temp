namespace IdentityService.Domain.Dtos
{
    public record FeedbackMessageDto
    {
        public Guid Uid { get; init; }
        public Guid UserUid { get; init; }
        public string UserFullName { get; init; }
        public string UserEmail { get; init; }
        public string UserPhone { get; init; }
        public string? Avatar { get; init; }
        public string Message { get; init; }
        public DateTime AskedDateTime { get; init; }
        public DateTime? SentDateTime { get; init; }
    }
}
