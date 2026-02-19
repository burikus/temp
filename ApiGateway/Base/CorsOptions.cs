namespace ApiGateway.Base
{
    public record CorsOptions()
    {
        private static readonly string AppSettingsSectionName = "CORS";

        public bool AllowAnyOrigin { get; init; }
        public string[] AllowOrigins { get; init; }
        public bool AllowAnyMethod { get; init; }
        public string[] AllowMethods { get; init; }
        public bool AllowAnyHeader { get; init; }
        public string[] AllowHeaders { get; init; }
        public bool AllowCredentials { get; init; }

        public static CorsOptions GetFromConfiguration(IConfiguration configurationSection, IHostEnvironment hostEnvironment)
        {
            return configurationSection.GetSection(AppSettingsSectionName).Get<CorsOptions>();
        }
    }
}
