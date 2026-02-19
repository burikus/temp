using System.Net;

using Microsoft.AspNetCore.Server.Kestrel.Core;

using Newtonsoft.Json;

namespace ApiGateway.Base
{
    public class HostBuilderConfigurationBase
    {
        private const string GrpcPortSection = "GrpcPort";
        private const string ApplicationPortSection = "ApplicationPort";

        protected static void ConfigureKestrelPorts(WebHostBuilderContext context, KestrelServerOptions options)
        {
            var grpcPort = int.Parse(context.Configuration[GrpcPortSection]);
            var appPort = int.Parse(context.Configuration[ApplicationPortSection]);
            options.Listen(IPAddress.Any, grpcPort, listenOptions =>
                listenOptions.Protocols = HttpProtocols.Http2);

            options.Listen(IPAddress.Any, appPort, listenOptions =>
                listenOptions.Protocols = HttpProtocols.Http1);

            Console.WriteLine($"grpcPort {grpcPort} appPort {appPort}  " +
                $"HostingEnvironment {JsonConvert.SerializeObject(context.HostingEnvironment)} " +
                $"Configuration  {JsonConvert.SerializeObject(context.Configuration)} ");
        }
    }
}
