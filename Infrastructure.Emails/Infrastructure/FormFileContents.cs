namespace Infrastructure.Emails.Infrastructure
{
    public record FormFileContents
    {
        public string FileName { get; init; }
        public byte[] Content { get; init; }
    }
}
