namespace Infrastructure.Net.Http.ReverseProxy
{
    public class ReverseProxyOptions
    {
        public string? Scheme { get; set; }
        public string? Host { get; set; }
        public string? PathBase { get; set; }
    }
}
