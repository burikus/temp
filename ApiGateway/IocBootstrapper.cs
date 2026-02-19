using ApiGateway.Helpers;
using ServiceConfiguration.Middleware;

namespace ApiGateway
{
    public static class IocBootstrapper
    {
        public static void RegisterServices(IServiceCollection collection, ServiceAddresses serviceAddresses)
        {
            collection.AddTransient<GlobalExceptionHandlerMiddleware>();

            //collection.AddScoped<ITokenValidationProvider, TokenValidationProvider>();

            //collection.AddGrpcClient<TokenValidationService.TokenValidationServiceClient>(
            //    o => o.Address = new Uri(serviceAddresses.IdentityService));
        }
    }
}
