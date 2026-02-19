namespace ApiGateway.Models
{
    public class JwtModel
    {
        public string AccessToken { get; set; }
        public DateTime Expires { get; set; }
    }
}
