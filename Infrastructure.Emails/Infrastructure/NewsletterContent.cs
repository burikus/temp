namespace Infrastructure.Emails.Infrastructure
{
    public record NewsletterContent
    {
        public string Font { get; init; }
        public string FontSize { get; init; }
        public string FontColor { get; init; }
        public string FontAlign { get; init; }
        public string FontStyle { get; init; }
        public string FontWeight { get; init; }
        public string Message { get; init; }
        public string UserName { get; init; }
        public ArtsContent[] Arts { get; init; }
    }

    public record ArtsContent
    {
        public string Image { get; init; }
        public string Name { get; init; }
        public string Menu { get; init; }
    }
}
