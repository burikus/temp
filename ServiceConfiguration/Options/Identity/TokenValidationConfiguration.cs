namespace ServiceConfiguration.Options.Identity
{
    public record TokenValidationConfiguration
    {
        public string Issuer { get; set; }
        public string Secret { get; set; }
        public string LifeTime { get; set; }
    }
}
