namespace ServiceConfiguration
{
    public class SwaggerConfig
    {
        public string Title { get; }
        public string Version { get; }
        public string Url { get; }
        public string Name => $"{Title} {Version}";

        public SwaggerConfig(string serviceName)
        {
            Title = $"{serviceName}_API";
            Version = "v1";
            Url = "/swagger/v1/swagger.json";
        }
    }
}
